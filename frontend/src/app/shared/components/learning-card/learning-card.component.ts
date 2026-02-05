import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { CodeBlockComponent } from '../code-block/code-block.component';
import { DiagramViewerComponent } from '../diagram-viewer/diagram-viewer.component';
import { LearningLevel, LearningSectionGroup } from '../../../features/fullstack-learning/learning.model';

@Component({
  selector: 'app-learning-card',
  standalone: true,
  imports: [NgFor, NgIf, CodeBlockComponent, DiagramViewerComponent],
  animations: [
    trigger('expandBody', [
      transition(':enter', [
        style({ opacity: 0, height: 0 }),
        animate('260ms ease-out', style({ opacity: 1, height: '*' }))
      ]),
      transition(':leave', [animate('220ms ease-in', style({ opacity: 0, height: 0 }))])
    ])
  ],
  template: `
    <article class="learning-card" [class.expanded]="expanded">
      <header>
        <div>
          <span class="section-label">{{ group.section }}</span>
          <h2>{{ group.title }}</h2>
        </div>
        <button type="button" (click)="expanded = !expanded">{{ expanded ? 'Collapse' : 'Expand' }}</button>
      </header>

      <div class="tabs">
        <button type="button" *ngFor="let tab of levels" [class.active]="tab === activeLevel" (click)="activeLevel = tab">{{ tab }}</button>
      </div>

      <section *ngIf="expanded" @expandBody>
        <p class="explanation">{{ activeSection.explanation }}</p>
        <p><strong>Real world:</strong> {{ activeSection.realWorldExample }}</p>

        <div class="detail-grid">
          <div>
            <h3>Step-by-step workflow</h3>
            <ul><li *ngFor="let step of activeSection.workflowSteps">{{ step }}</li></ul>
          </div>
          <div>
            <h3>Common mistakes</h3>
            <ul><li *ngFor="let mistake of activeSection.commonMistakes">{{ mistake }}</li></ul>
          </div>
          <div>
            <h3>Industry best practices</h3>
            <ul><li *ngFor="let practice of activeSection.bestPractices">{{ practice }}</li></ul>
          </div>
        </div>

        <div class="code-grid" *ngIf="activeSection.codeExamples.length">
          <app-code-block
            *ngFor="let example of activeSection.codeExamples"
            [title]="example.title"
            [description]="example.description"
            [code]="example.code"
            [language]="example.language"
          ></app-code-block>
        </div>

        <div class="diagram-grid" *ngIf="activeSection.diagrams.length">
          <app-diagram-viewer
            *ngFor="let diagram of activeSection.diagrams"
            [src]="diagram.path"
            [title]="diagram.title"
            [description]="diagram.description"
          ></app-diagram-viewer>
        </div>
      </section>
    </article>
  `,
  styles: [
    `
      .learning-card {
        border-radius: 1rem;
        border: 1px solid rgba(148, 163, 184, 0.3);
        background: linear-gradient(145deg, rgba(15, 23, 42, 0.82), rgba(30, 41, 59, 0.85));
        padding: 1rem;
        transition: transform 220ms ease, box-shadow 220ms ease;
      }
      .learning-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 40px rgba(2, 6, 23, 0.4);
      }
      header {
        display: flex;
        justify-content: space-between;
        gap: 0.75rem;
        align-items: start;
      }
      h2 { font-size: 1.1rem; margin-top: 0.25rem; }
      .section-label { color: #67e8f9; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; }
      button {
        border: 1px solid rgba(56, 189, 248, 0.35);
        border-radius: 999px;
        background: rgba(56, 189, 248, 0.14);
        color: #bae6fd;
        padding: 0.4rem 0.9rem;
        cursor: pointer;
      }
      .tabs { margin-top: 0.9rem; display: flex; gap: 0.5rem; flex-wrap: wrap; }
      .tabs button { text-transform: capitalize; }
      .tabs .active { background: linear-gradient(120deg, rgba(34, 211, 238, 0.32), rgba(167, 139, 250, 0.3)); }
      section { margin-top: 1rem; display: grid; gap: 1rem; }
      .explanation { color: #cbd5e1; line-height: 1.6; }
      .detail-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.8rem; }
      ul { margin: 0.5rem 0 0; padding-left: 1rem; color: #cbd5e1; }
      li { margin-bottom: 0.4rem; }
      .code-grid, .diagram-grid { display: grid; gap: 0.75rem; }
    `
  ]
})
export class LearningCardComponent {
  @Input({ required: true }) group!: LearningSectionGroup;

  public expanded = false;
  public activeLevel: LearningLevel = 'beginner';
  public readonly levels: LearningLevel[] = ['beginner', 'intermediate', 'advanced'];

  public get activeSection() {
    return this.group.levels[this.activeLevel];
  }
}
