import { LearningModel } from '../models/learning.model';
import { LearningSection } from '../types/learning.types';

export class LearningService {
  public getFullStackLearningContent(): LearningSection[] {
    return LearningModel.getFullStackSections();
  }
}
