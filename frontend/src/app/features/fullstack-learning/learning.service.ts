import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LearningSection } from './learning.model';

@Injectable({ providedIn: 'root' })
export class LearningService {
  private readonly apiBaseUrl = 'http://localhost:3000';

  constructor(private readonly http: HttpClient) {}

  public getFullStackLearningContent(): Observable<LearningSection[]> {
    return this.http.get<LearningSection[]>(`${this.apiBaseUrl}/api/learning/fullstack`);
  }
}
