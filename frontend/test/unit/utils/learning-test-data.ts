import { LearningSectionGroup } from '../../../src/app/features/fullstack-learning/learning.model';

const mkSection = (level: 'beginner' | 'intermediate' | 'advanced') => ({
  section: 'APIs',
  level,
  title: 'REST',
  explanation: `${level} explanation`,
  realWorldExample: 'Example',
  workflowSteps: ['one'],
  commonMistakes: ['mistake'],
  bestPractices: ['practice'],
  codeExamples: [
    {
      title: 'Code sample',
      language: 'typescript' as const,
      description: 'desc',
      code: 'const x = 1;'
    }
  ],
  diagrams: [
    {
      id: 'd1',
      title: 'Diagram',
      path: '/assets/diagram.svg',
      description: 'desc'
    }
  ]
});

export const learningGroupFixture: LearningSectionGroup = {
  section: 'APIs',
  title: 'REST',
  levels: {
    beginner: mkSection('beginner'),
    intermediate: mkSection('intermediate'),
    advanced: mkSection('advanced')
  }
};
