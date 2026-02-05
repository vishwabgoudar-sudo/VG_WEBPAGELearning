import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { FullstackLearningComponent } from './features/fullstack-learning/fullstack-learning.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'full-stack-development', component: FullstackLearningComponent },
  { path: '**', redirectTo: '' }
];
