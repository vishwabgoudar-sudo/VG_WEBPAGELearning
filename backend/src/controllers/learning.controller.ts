import { Request, Response, NextFunction } from 'express';
import { LearningService } from '../services/learning.service';

export class LearningController {
  private readonly learningService: LearningService;

  constructor(learningService: LearningService) {
    this.learningService = learningService;
  }

  public getFullStackLearning = (_req: Request, res: Response, next: NextFunction): void => {
    try {
      const learningContent = this.learningService.getFullStackLearningContent();
      res.status(200).json(learningContent);
    } catch (error) {
      next(error);
    }
  };
}
