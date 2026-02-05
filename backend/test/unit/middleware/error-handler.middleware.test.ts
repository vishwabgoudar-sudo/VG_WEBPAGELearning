import { expect } from 'chai';
import { Request, Response } from 'express';
import { errorHandlerMiddleware } from '../../../src/middleware/error-handler.middleware';

describe('errorHandlerMiddleware', () => {
  it('returns specific message for 4xx errors', () => {
    let statusCode: number | undefined;
    let payload: { message: string; statusCode: number } | undefined;

    const response = {
      status: (code: number) => {
        statusCode = code;
        return response;
      },
      json: (body: { message: string; statusCode: number }) => {
        payload = body;
        return response;
      }
    } as unknown as Response;

    const error = Object.assign(new Error('Validation failed'), { statusCode: 400 });
    errorHandlerMiddleware(error, {} as Request, response, () => undefined);

    expect(statusCode).to.equal(400);
    expect(payload).to.deep.equal({ message: 'Validation failed', statusCode: 400 });
  });

  it('masks internal server error messages for 5xx errors', () => {
    let statusCode: number | undefined;
    let payload: { message: string; statusCode: number } | undefined;

    const response = {
      status: (code: number) => {
        statusCode = code;
        return response;
      },
      json: (body: { message: string; statusCode: number }) => {
        payload = body;
        return response;
      }
    } as unknown as Response;

    const error = Object.assign(new Error('Unexpected db failure'), { statusCode: 500 });
    errorHandlerMiddleware(error, {} as Request, response, () => undefined);

    expect(statusCode).to.equal(500);
    expect(payload).to.deep.equal({ message: 'Internal server error', statusCode: 500 });
  });
});
