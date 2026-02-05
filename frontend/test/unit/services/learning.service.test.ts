import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { LearningService } from '../../../src/app/features/fullstack-learning/learning.service';

describe('LearningService', () => {
  it('calls the backend fullstack endpoint', () => {
    TestBed.configureTestingModule({
      providers: [LearningService, provideHttpClient(), provideHttpClientTesting()]
    });

    const service = TestBed.inject(LearningService);
    const httpMock = TestBed.inject(HttpTestingController);

    service.getFullStackLearningContent().subscribe((response) => {
      expect(response.length).toBe(1);
      expect(response[0].section).toBe('APIs');
    });

    const request = httpMock.expectOne('http://localhost:3000/api/learning/fullstack');
    expect(request.request.method).toBe('GET');
    request.flush([
      {
        section: 'APIs',
        level: 'beginner',
        title: 'REST',
        explanation: 'test',
        realWorldExample: 'example',
        workflowSteps: [],
        commonMistakes: [],
        bestPractices: [],
        codeExamples: [],
        diagrams: []
      }
    ]);

    httpMock.verify();
  });
});
