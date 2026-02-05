import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <main class="shell">
      <app-navbar></app-navbar>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [
    `
      .shell {
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem;
        display: grid;
        gap: 1rem;
      }
    `
  ]
})
export class AppComponent {}
