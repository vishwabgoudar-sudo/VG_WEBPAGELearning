import { Router } from 'express';
import { LearningController } from '../controllers/learning.controller';
import { LearningService } from '../services/learning.service';

const learningRouter = Router();

const learningService = new LearningService();
const learningController = new LearningController(learningService);

learningRouter.get('/fullstack', learningController.getFullStackLearning);

export { learningRouter };
