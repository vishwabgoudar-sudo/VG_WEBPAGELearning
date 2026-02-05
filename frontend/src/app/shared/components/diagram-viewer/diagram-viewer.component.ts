import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-diagram-viewer',
  standalone: true,
  template: `
    <figure class="diagram">
      <img [src]="src" [alt]="title" loading="lazy" />
      <figcaption>
        <strong>{{ title }}</strong>
        <span>{{ description }}</span>
      </figcaption>
    </figure>
  `,
  styles: [
    `
      .diagram {
        display: grid;
        gap: 0.5rem;
        margin: 0;
      }
      img {
        width: 100%;
        border-radius: 0.85rem;
        border: 1px solid rgba(148, 163, 184, 0.25);
        background: #020617;
      }
      figcaption {
        display: grid;
        gap: 0.2rem;
        color: #cbd5e1;
        font-size: 0.84rem;
      }
      span {
        color: #94a3b8;
      }
    `
  ]
})
export class DiagramViewerComponent {
  @Input({ required: true }) src = '';
  @Input({ required: true }) title = '';
  @Input({ required: true }) description = '';
}
