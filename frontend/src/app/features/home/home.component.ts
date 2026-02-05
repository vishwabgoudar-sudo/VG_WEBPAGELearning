import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <p class="eyebrow">Modern full-stack platform</p>
      <h1>VG Learning: Beginner to Enterprise Engineering</h1>
      <p>
        Explore deeply expanded learning modules for APIs, Angular, Node.js, TypeScript, auth, and
        architecture with animated cards, diagrams, and practical workflows.
      </p>
      <div class="hero-badges">
        <span>Motion UI</span>
        <span>Interactive Code Blocks</span>
        <span>Architecture Diagrams</span>
      </div>
      <a class="cta" routerLink="/full-stack-development">Start Learning Path</a>
    </section>
  `,
  styles: [
    `
      .hero {
        padding: clamp(1.4rem, 3vw, 2.2rem);
        border-radius: 1.25rem;
        background:
          radial-gradient(circle at 85% 10%, rgba(56, 189, 248, 0.2), transparent 40%),
          radial-gradient(circle at 0% 90%, rgba(167, 139, 250, 0.2), transparent 50%),
          rgba(15, 23, 42, 0.7);
        border: 1px solid rgba(148, 163, 184, 0.28);
        display: grid;
        gap: 1rem;
      }
      .eyebrow { color: #67e8f9; text-transform: uppercase; letter-spacing: 0.08em; font-size: 0.75rem; }
      h1 { font-size: clamp(2rem, 4.5vw, 3rem); margin: 0; }
      p { color: #cbd5e1; margin: 0; line-height: 1.6; max-width: 70ch; }
      .hero-badges { display: flex; flex-wrap: wrap; gap: 0.65rem; }
      .hero-badges span {
        padding: 0.35rem 0.8rem;
        border-radius: 999px;
        background: rgba(34, 211, 238, 0.16);
        color: #a5f3fc;
        font-size: 0.82rem;
      }
      .cta {
        width: fit-content;
        text-decoration: none;
        padding: 0.7rem 1rem;
        border-radius: 0.75rem;
        background: linear-gradient(125deg, #22d3ee, #8b5cf6);
        color: #0f172a;
        font-weight: 700;
      }
    `
  ]
})
export class HomeComponent {}
