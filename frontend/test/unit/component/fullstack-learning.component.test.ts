import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { FullstackLearningComponent } from '../../../src/app/features/fullstack-learning/fullstack-learning.component';
import { LearningService } from '../../../src/app/features/fullstack-learning/learning.service';
import { learningGroupFixture } from '../utils/learning-test-data';

describe('FullstackLearningComponent', () => {
  it('renders grouped learning cards from API response', async () => {
    const apiSections = Object.values(learningGroupFixture.levels);

    await TestBed.configureTestingModule({
      imports: [FullstackLearningComponent],
      providers: [
        {
          provide: LearningService,
          useValue: { getFullStackLearningContent: () => of(apiSections) }
        }
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(FullstackLearningComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelectorAll('app-learning-card').length).toBe(1);
    expect(fixture.componentInstance.errorMessage).toBe('');
  });

  it('sets friendly error message when API call fails', async () => {
    await TestBed.configureTestingModule({
      imports: [FullstackLearningComponent],
      providers: [
        {
          provide: LearningService,
          useValue: { getFullStackLearningContent: () => throwError(() => new Error('Network down')) }
        }
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(FullstackLearningComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(fixture.componentInstance.errorMessage).toContain('Unable to load learning content');
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('.status')?.textContent).toContain('Unable to load learning content');
  });
});
