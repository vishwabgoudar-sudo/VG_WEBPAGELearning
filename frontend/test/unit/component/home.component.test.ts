import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomeComponent } from '../../../src/app/features/home/home.component';

describe('HomeComponent', () => {
  it('renders hero content and cta', async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('h1')?.textContent).toContain('VG Learning');
    expect(element.querySelector('a.cta')?.getAttribute('href')).toContain('/full-stack-development');
  });
});
