import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LearningService } from './learning.service';
import { LearningSection } from './learning.model';

@Component({
  selector: 'app-fullstack-learning',
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe],
  template: `
    <section class="page-header">
      <h1>Full Stack Development Learning Path</h1>
      <p>
        Structured from beginner to advanced topics with practical enterprise guidance,
        backend-flow narratives, and modern architecture best practices.
      </p>
    </section>

    <section class="status" *ngIf="errorMessage">{{ errorMessage }}</section>

    <section class="card-grid" *ngIf="learningSections$ | async as sections">
      <article class="learning-card" *ngFor="let section of sections; let i = index">
        <span class="chip">Module {{ i + 1 }}</span>
        <h2>{{ section.section }}</h2>
        <p>{{ section.content }}</p>
      </article>
    </section>
  `,
  styles: [
    `
      :host {
        display: grid;
        gap: 1.25rem;
      }

      .page-header {
        padding: 1.4rem;
        border-radius: 1rem;
        background: linear-gradient(135deg, rgba(34, 211, 238, 0.14), rgba(167, 139, 250, 0.16));
        border: 1px solid rgba(148, 163, 184, 0.3);
      }

      .page-header p {
        margin-top: 0.8rem;
        color: #cbd5e1;
        line-height: 1.6;
      }

      .status {
        padding: 1rem;
        border-radius: 0.75rem;
        border: 1px solid rgba(248, 113, 113, 0.45);
        background: rgba(127, 29, 29, 0.25);
        color: #fecaca;
      }

      .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 1rem;
      }

      .learning-card {
        background: linear-gradient(160deg, rgba(30, 41, 59, 0.85), rgba(15, 23, 42, 0.9));
        border: 1px solid rgba(125, 211, 252, 0.2);
        border-radius: 1rem;
        padding: 1.15rem;
        box-shadow: 0 12px 25px rgba(15, 23, 42, 0.35);
        transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
      }

      .learning-card:hover {
        transform: translateY(-4px) scale(1.01);
        border-color: rgba(94, 234, 212, 0.58);
        box-shadow: 0 18px 32px rgba(15, 23, 42, 0.45);
      }

      .chip {
        display: inline-block;
        margin-bottom: 0.65rem;
        background: rgba(56, 189, 248, 0.2);
        color: #67e8f9;
        padding: 0.2rem 0.6rem;
        border-radius: 999px;
        font-size: 0.75rem;
      }

      h2 {
        margin-bottom: 0.65rem;
        color: #e0f2fe;
        font-size: 1.1rem;
      }

      p {
        color: #cbd5e1;
        line-height: 1.55;
      }
    `
  ]
})
export class FullstackLearningComponent {
  public readonly learningSections$: Observable<LearningSection[]>;
  public errorMessage = '';

  constructor(private readonly learningService: LearningService) {
    this.learningSections$ = this.learningService.getFullStackLearning();
  }
}
