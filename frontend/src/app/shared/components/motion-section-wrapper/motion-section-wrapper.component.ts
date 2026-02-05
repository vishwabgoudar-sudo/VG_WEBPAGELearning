import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-motion-section-wrapper',
  standalone: true,
  animations: [
    trigger('sectionEnter', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(14px) scale(0.985)' }),
        animate('420ms cubic-bezier(0.2, 0.7, 0, 1)', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ])
    ])
  ],
  template: `
    <section class="motion-wrapper" @sectionEnter>
      <ng-content></ng-content>
    </section>
  `,
  styles: [
    `
      .motion-wrapper {
        background: linear-gradient(140deg, rgba(30, 41, 59, 0.86), rgba(15, 23, 42, 0.9));
        border: 1px solid rgba(148, 163, 184, 0.25);
        border-radius: 1rem;
        padding: 1rem;
      }
    `
  ]
})
export class MotionSectionWrapperComponent {}
