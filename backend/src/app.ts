import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { envConfig } from './config/env';
import { errorHandlerMiddleware } from './middleware/error-handler.middleware';
import { learningRouter } from './routes/learning.routes';

const app: Application = express();

app.use(
  cors({
    origin: envConfig.corsOrigin
  })
);
app.use(express.json());

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', service: 'vg-learning-backend' });
});

app.use('/api/learning', learningRouter);
app.use(errorHandlerMiddleware);

export { app };
