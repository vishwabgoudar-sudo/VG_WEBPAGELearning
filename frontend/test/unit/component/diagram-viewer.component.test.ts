import { TestBed } from '@angular/core/testing';
import { DiagramViewerComponent } from '../../../src/app/shared/components/diagram-viewer/diagram-viewer.component';

describe('DiagramViewerComponent', () => {
  it('renders image metadata', async () => {
    await TestBed.configureTestingModule({ imports: [DiagramViewerComponent] }).compileComponents();
    const fixture = TestBed.createComponent(DiagramViewerComponent);

    fixture.componentInstance.src = '/assets/diagram.svg';
    fixture.componentInstance.title = 'Flow';
    fixture.componentInstance.description = 'Flow description';
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('img')?.getAttribute('src')).toBe('/assets/diagram.svg');
    expect(element.querySelector('figcaption')?.textContent).toContain('Flow description');
  });
});
