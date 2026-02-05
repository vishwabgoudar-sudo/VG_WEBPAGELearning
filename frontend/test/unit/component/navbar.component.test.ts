import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NavbarComponent } from '../../../src/app/core/components/navbar/navbar.component';

describe('NavbarComponent', () => {
  it('renders navigation links', async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    const fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();

    const anchors = Array.from((fixture.nativeElement as HTMLElement).querySelectorAll('a'));
    expect(anchors.length).toBeGreaterThan(1);
    expect(anchors.map((a) => a.textContent?.trim())).toContain('Home');
    expect(anchors.map((a) => a.textContent?.trim())).toContain('Full Stack Development');
  });
});
