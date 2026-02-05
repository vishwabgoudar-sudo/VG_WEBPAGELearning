import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-code-block',
  standalone: true,
  imports: [NgClass],
  template: `
    <div class="code-shell" [ngClass]="language">
      <header>
        <div>
          <h4>{{ title }}</h4>
          <p>{{ description }}</p>
        </div>
        <button type="button" (click)="copyCode()">{{ copied ? 'Copied!' : 'Copy' }}</button>
      </header>
      <pre><code>{{ code }}</code></pre>
    </div>
  `,
  styles: [
    `
      .code-shell {
        border: 1px solid rgba(148, 163, 184, 0.35);
        border-radius: 0.85rem;
        overflow: hidden;
        background: rgba(15, 23, 42, 0.9);
      }
      header {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        padding: 0.75rem 1rem;
        border-bottom: 1px solid rgba(148, 163, 184, 0.2);
        align-items: center;
      }
      h4 {
        margin: 0;
        font-size: 0.95rem;
      }
      p {
        margin: 0.15rem 0 0;
        color: #94a3b8;
        font-size: 0.8rem;
      }
      button {
        border: 1px solid rgba(56, 189, 248, 0.45);
        border-radius: 999px;
        padding: 0.35rem 0.8rem;
        background: rgba(56, 189, 248, 0.12);
        color: #bae6fd;
        cursor: pointer;
      }
      pre {
        margin: 0;
        padding: 1rem;
        overflow-x: auto;
        font-size: 0.85rem;
      }
    `
  ]
})
export class CodeBlockComponent {
  @Input({ required: true }) title = '';
  @Input({ required: true }) description = '';
  @Input({ required: true }) code = '';
  @Input() language = 'typescript';

  public copied = false;

  public async copyCode(): Promise<void> {
    await navigator.clipboard.writeText(this.code);
    this.copied = true;
    window.setTimeout(() => {
      this.copied = false;
    }, 1200);
  }
}
