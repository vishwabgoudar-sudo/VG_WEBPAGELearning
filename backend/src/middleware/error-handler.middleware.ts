import { NextFunction, Request, Response } from 'express';

interface ErrorWithStatus extends Error {
  statusCode?: number;
}

export const errorHandlerMiddleware = (
  error: ErrorWithStatus,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  const statusCode = error.statusCode ?? 500;
  const message = statusCode >= 500 ? 'Internal server error' : error.message;

  res.status(statusCode).json({
    message,
    statusCode
  });
};
