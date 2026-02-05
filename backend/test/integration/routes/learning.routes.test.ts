import { expect } from 'chai';
import request from 'supertest';
import { app } from '../../../src/app';
import { LearningService } from '../../../src/services/learning.service';

describe('Learning routes integration', () => {
  it('GET /health returns service status payload', async () => {
    const response = await request(app).get('/health');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({ status: 'ok', service: 'vg-learning-backend' });
  });

  it('GET /api/learning/fullstack returns expected response structure', async () => {
    const response = await request(app).get('/api/learning/fullstack');

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
    expect(response.body[0]).to.include.all.keys(
      'section',
      'level',
      'title',
      'explanation',
      'realWorldExample',
      'workflowSteps',
      'commonMistakes',
      'bestPractices',
      'codeExamples',
      'diagrams'
    );
  });

  it('returns CORS headers for approved origins', async () => {
    const response = await request(app).get('/health').set('Origin', 'http://localhost:4200');

    expect(response.headers['access-control-allow-origin']).to.equal('http://localhost:4200');
  });

  it('uses error middleware when controller throws', async () => {
    const originalMethod = LearningService.prototype.getFullStackLearningContent;
    LearningService.prototype.getFullStackLearningContent = () => {
      throw new Error('Exploded');
    };

    const response = await request(app).get('/api/learning/fullstack');

    LearningService.prototype.getFullStackLearningContent = originalMethod;

    expect(response.status).to.equal(500);
    expect(response.body).to.deep.equal({ message: 'Internal server error', statusCode: 500 });
  });
});
