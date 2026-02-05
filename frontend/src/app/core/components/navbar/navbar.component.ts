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
        top: 0;
        z-index: 10;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        padding: 1rem 1.25rem;
        border-radius: 1rem;
        background: rgba(15, 23, 42, 0.85);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(148, 163, 184, 0.35);
        box-shadow: 0 15px 35px rgba(2, 6, 23, 0.4);
      }

      .brand {
        font-weight: 700;
        text-decoration: none;
        color: #67e8f9;
      }

      nav {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      }

      nav a {
        text-decoration: none;
        padding: 0.5rem 0.85rem;
        border-radius: 0.65rem;
        color: #e2e8f0;
        transition: all 180ms ease;
      }

      nav a:hover {
        background: rgba(56, 189, 248, 0.2);
        transform: translateY(-1px);
      }

      nav a.active {
        background: linear-gradient(120deg, rgba(56, 189, 248, 0.25), rgba(167, 139, 250, 0.3));
        color: #bae6fd;
      }
    `
  ]
})
export class NavbarComponent {}
