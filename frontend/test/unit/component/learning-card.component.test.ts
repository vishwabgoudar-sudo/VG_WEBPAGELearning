import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LearningCardComponent } from '../../../src/app/shared/components/learning-card/learning-card.component';
import { learningGroupFixture } from '../utils/learning-test-data';

describe('LearningCardComponent', () => {
  let fixture: ComponentFixture<LearningCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningCardComponent, NoopAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LearningCardComponent);
    fixture.componentInstance.group = learningGroupFixture;
    fixture.detectChanges();
  });

  it('toggles card body visibility', () => {
    const button = fixture.nativeElement.querySelector('header button') as HTMLButtonElement;
    expect(fixture.componentInstance.expanded).toBeFalse();

    button.click();
    fixture.detectChanges();

    expect(fixture.componentInstance.expanded).toBeTrue();
    expect(fixture.nativeElement.querySelector('section')).toBeTruthy();
  });

  it('switches active tab levels', () => {
    const tabs = fixture.nativeElement.querySelectorAll('.tabs button') as NodeListOf<HTMLButtonElement>;

    tabs[1].click();
    fixture.detectChanges();

    expect(fixture.componentInstance.activeLevel).toBe('intermediate');
    expect(fixture.componentInstance.activeSection.level).toBe('intermediate');
  });
});
