import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section class="hero">
      <h1>VG Learning</h1>
      <p>
        Accelerate your full stack journey with structured enterprise-grade content covering
        backend architecture, modern Angular, and production-ready engineering patterns.
      </p>
      <div class="hero-badges">
        <span>TypeScript Everywhere</span>
        <span>REST Architecture</span>
        <span>Angular Standalone</span>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        padding: 2rem;
        border-radius: 1.2rem;
        background: linear-gradient(140deg, rgba(56, 189, 248, 0.15), rgba(167, 139, 250, 0.15));
        border: 1px solid rgba(148, 163, 184, 0.3);
        display: grid;
        gap: 1rem;
      }

      h1 {
        font-size: clamp(2rem, 4vw, 3rem);
      }

      p {
        color: #cbd5e1;
        line-height: 1.6;
      }

      .hero-badges {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
      }

      .hero-badges span {
        padding: 0.45rem 0.85rem;
        border-radius: 999px;
        background: rgba(34, 211, 238, 0.2);
        color: #a5f3fc;
        font-size: 0.85rem;
      }
    `
  ]
})
export class HomeComponent {}
