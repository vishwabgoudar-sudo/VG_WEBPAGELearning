import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { LearningService } from './learning.service';
import { LearningLevel, LearningSection, LearningSectionGroup } from './learning.model';
import { MotionSectionWrapperComponent } from '../../shared/components/motion-section-wrapper/motion-section-wrapper.component';
import { LearningCardComponent } from '../../shared/components/learning-card/learning-card.component';

@Component({
  selector: 'app-fullstack-learning',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, MotionSectionWrapperComponent, LearningCardComponent],
  template: `
    <app-motion-section-wrapper>
      <section class="page-header">
        <h1>Full Stack Development: Motion Learning Experience</h1>
        <p>
          Beginner-to-enterprise learning pathways with interactive tabs, animated content blocks,
          architecture diagrams, and practical coding workflows.
        </p>
      </section>
    </app-motion-section-wrapper>

    <section class="status" *ngIf="errorMessage">{{ errorMessage }}</section>

    <section class="card-grid" *ngIf="learningSectionGroups$ | async as groups">
      <app-learning-card *ngFor="let group of groups" [group]="group"></app-learning-card>
    </section>
  `,
  styles: [
    `
      :host {
        display: grid;
        gap: 1.25rem;
      }
      .page-header {
        display: grid;
        gap: 0.8rem;
      }
      h1 {
        font-size: clamp(1.8rem, 3.8vw, 2.5rem);
        margin: 0;
      }
      p {
        margin: 0;
        color: #cbd5e1;
        line-height: 1.65;
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
        gap: 1rem;
      }
    `
  ]
})
export class FullstackLearningComponent {
  public errorMessage = '';

  public readonly learningSectionGroups$: Observable<LearningSectionGroup[]> = this.learningService.getFullStackLearningContent().pipe(
    map((sections) => this.groupSections(sections)),
    catchError(() => {
      this.errorMessage =
        'Unable to load learning content right now. Verify that the backend is running on http://localhost:3000.';
      return of([]);
    })
  );

  constructor(private readonly learningService: LearningService) {}

  private groupSections(sections: LearningSection[]): LearningSectionGroup[] {
    const grouped = new Map<string, Partial<Record<LearningLevel, LearningSection>>>();

    sections.forEach((section) => {
      const levels = grouped.get(section.section) ?? {};
      levels[section.level] = section;
      grouped.set(section.section, levels);
    });

    return [...grouped.entries()]
      .filter(([, levels]) => levels.beginner && levels.intermediate && levels.advanced)
      .map(([section, levels]) => ({
        section,
        title: levels.beginner?.title ?? section,
        levels: {
          beginner: levels.beginner as LearningSection,
          intermediate: levels.intermediate as LearningSection,
          advanced: levels.advanced as LearningSection
        }
      }));
  }
}
