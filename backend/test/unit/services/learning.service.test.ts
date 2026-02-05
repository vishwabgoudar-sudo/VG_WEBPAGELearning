import { expect } from 'chai';
import { LearningModel } from '../../../src/models/learning.model';
import { LearningService } from '../../../src/services/learning.service';

describe('LearningService', () => {
  it('returns learning content provided by the model', () => {
    const modelSpy = LearningModel.getFullStackSections;
    const mockedSections = [
      {
        section: 'APIs',
        level: 'beginner' as const,
        title: 'Test section',
        explanation: 'test',
        realWorldExample: 'example',
        workflowSteps: [],
        commonMistakes: [],
        bestPractices: [],
        codeExamples: [],
        diagrams: []
      }
    ];

    LearningModel.getFullStackSections = () => mockedSections;

    const service = new LearningService();
    const response = service.getFullStackLearningContent();

    expect(response).to.deep.equal(mockedSections);

    LearningModel.getFullStackSections = modelSpy;
  });
});
