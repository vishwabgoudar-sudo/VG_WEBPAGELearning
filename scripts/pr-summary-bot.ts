interface PullRequestFile {
  filename: string;
  status: string;
  additions: number;
  deletions: number;
  patch?: string;
}

const token = process.env.GITHUB_TOKEN;
const repository = process.env.GITHUB_REPOSITORY;
const prNumber = process.env.PR_NUMBER;
const prTitle = process.env.PR_TITLE ?? '';

if (!token || !repository || !prNumber) {
  throw new Error('Missing required environment variables for PR summary bot.');
}

const [owner, repo] = repository.split('/');

const headers = {
  Authorization: `Bearer ${token}`,
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28'
};

const categorizeFile = (filename: string, patch = ''): 'Features Added' | 'Bug Fixes' | 'Refactors' | 'Tests' => {
  const lowered = `${filename} ${patch}`.toLowerCase();

  if (lowered.includes('test') || lowered.includes('.spec.') || lowered.includes('.test.')) {
    return 'Tests';
  }

  if (lowered.includes('fix') || lowered.includes('bug') || lowered.includes('error')) {
    return 'Bug Fixes';
  }

  if (lowered.includes('refactor') || lowered.includes('cleanup') || lowered.includes('rename')) {
    return 'Refactors';
  }

  return 'Features Added';
};

const buildSummaryComment = (files: PullRequestFile[]): string => {
  const sections: Record<string, string[]> = {
    'Features Added': [],
    'Bug Fixes': [],
    Refactors: [],
    Tests: []
  };

  files.forEach((file) => {
    const bucket = categorizeFile(file.filename, file.patch);
    sections[bucket].push(`- ${file.filename} (+${file.additions} / -${file.deletions})`);
  });

  const renderedSections = Object.entries(sections)
    .map(([name, items]) => `### ${name}\n${items.length ? items.join('\n') : '- None'}`)
    .join('\n\n');

  const fileList = files.map((file) => `- ${file.filename}`).join('\n');

  return [
    '## PR Summary',
    '',
    `**Title:** ${prTitle}`,
    '',
    renderedSections,
    '',
    '### Files Changed',
    fileList || '- None'
  ].join('\n');
};

const run = async (): Promise<void> => {
  const filesResponse = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/pulls/${prNumber}/files?per_page=100`,
    { headers }
  );

  if (!filesResponse.ok) {
    throw new Error(`Unable to fetch PR files. Status: ${filesResponse.status}`);
  }

  const files = (await filesResponse.json()) as PullRequestFile[];
  const body = buildSummaryComment(files);

  const commentsResponse = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/issues/${prNumber}/comments`,
    {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ body })
    }
  );

  if (!commentsResponse.ok) {
    throw new Error(`Unable to post PR summary comment. Status: ${commentsResponse.status}`);
  }
};

void run();
