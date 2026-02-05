export type LearningLevel = 'beginner' | 'intermediate' | 'advanced';

export interface CodeExample {
  title: string;
  language: 'typescript' | 'javascript' | 'json' | 'bash';
  description: string;
  code: string;
}

export interface LearningDiagram {
  id: string;
  title: string;
  path: string;
  description: string;
}

export interface LearningSection {
  section: string;
  level: LearningLevel;
  title: string;
  explanation: string;
  realWorldExample: string;
  workflowSteps: string[];
  commonMistakes: string[];
  bestPractices: string[];
  codeExamples: CodeExample[];
  diagrams: LearningDiagram[];
}
