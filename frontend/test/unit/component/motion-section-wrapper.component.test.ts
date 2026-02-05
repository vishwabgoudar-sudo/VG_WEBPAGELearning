import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MotionSectionWrapperComponent } from '../../../src/app/shared/components/motion-section-wrapper/motion-section-wrapper.component';

@Component({
  standalone: true,
  imports: [MotionSectionWrapperComponent],
  template: `<app-motion-section-wrapper><p>Projected</p></app-motion-section-wrapper>`
})
class HostComponent {}

describe('MotionSectionWrapperComponent', () => {
  it('renders projected content', async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent, NoopAnimationsModule]
    }).compileComponents();

    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Projected');
  });
});
