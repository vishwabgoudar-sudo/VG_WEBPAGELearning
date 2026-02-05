import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LearningSection } from './learning.model';

@Injectable({
  providedIn: 'root'
})
export class LearningService {
  private readonly apiBaseUrl = 'http://localhost:3000/api/learning';

  constructor(private readonly http: HttpClient) {}

  public getFullStackLearning(): Observable<LearningSection[]> {
    return this.http.get<LearningSection[]>(`${this.apiBaseUrl}/fullstack`);
  }
}
