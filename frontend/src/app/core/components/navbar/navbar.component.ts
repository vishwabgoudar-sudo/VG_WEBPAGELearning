import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="navbar">
      <a routerLink="" class="brand">VG Learning</a>
      <nav>
        <a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
        <a routerLink="/full-stack-development" routerLinkActive="active">Full Stack Development</a>
      </nav>
    </header>
  `,
  styles: [
    `
      .navbar {
        position: sticky;
        top: 0.75rem;
        z-index: 10;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        padding: 1rem 1.2rem;
        border-radius: 1rem;
        background: rgba(15, 23, 42, 0.75);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(148, 163, 184, 0.28);
      }
      .brand {
        font-weight: 700;
        text-decoration: none;
        background: linear-gradient(120deg, #67e8f9, #c4b5fd);
        -webkit-background-clip: text;
        color: transparent;
      }
      nav {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
      }
      nav a {
        text-decoration: none;
        padding: 0.5rem 0.9rem;
        border-radius: 999px;
        color: #e2e8f0;
        transition: all 220ms ease;
      }
      nav a:hover {
        transform: translateY(-1px) scale(1.02);
        background: rgba(56, 189, 248, 0.15);
      }
      nav a.active {
        background: linear-gradient(120deg, rgba(56, 189, 248, 0.28), rgba(167, 139, 250, 0.26));
      }
    `
  ]
})
export class NavbarComponent {}
