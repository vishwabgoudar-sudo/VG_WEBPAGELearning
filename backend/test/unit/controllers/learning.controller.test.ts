import { expect } from 'chai';
import { NextFunction, Request, Response } from 'express';
import { LearningController } from '../../../src/controllers/learning.controller';
import { LearningService } from '../../../src/services/learning.service';

describe('LearningController', () => {
  it('returns 200 with learning content when service succeeds', () => {
    const payload = [{ section: 'APIs' }];
    const service = {
      getFullStackLearningContent: () => payload
    } as unknown as LearningService;

    const controller = new LearningController(service);
    let statusCode: number | undefined;
    let jsonPayload: unknown;
    const response = {
      status: (code: number) => {
        statusCode = code;
        return response;
      },
      json: (value: unknown) => {
        jsonPayload = value;
        return response;
      }
    } as unknown as Response;

    let nextCalled = false;
    const next: NextFunction = () => {
      nextCalled = true;
    };

    controller.getFullStackLearning({} as Request, response, next);

    expect(statusCode).to.equal(200);
    expect(jsonPayload).to.equal(payload);
    expect(nextCalled).to.equal(false);
  });

  it('forwards errors to next middleware when service throws', () => {
    const expectedError = new Error('Service failed');
    const service = {
      getFullStackLearningContent: () => {
        throw expectedError;
      }
    } as unknown as LearningService;

    const controller = new LearningController(service);
    let forwardedError: unknown;

    controller.getFullStackLearning({} as Request, {} as Response, (error?: unknown) => {
      forwardedError = error;
    });

    expect(forwardedError).to.equal(expectedError);
  });
});
