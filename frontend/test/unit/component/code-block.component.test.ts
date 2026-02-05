import { TestBed } from '@angular/core/testing';
import { CodeBlockComponent } from '../../../src/app/shared/components/code-block/code-block.component';

describe('CodeBlockComponent', () => {
  it('copies code and resets copied state after timeout', async () => {
    jasmine.clock().install();
    const clipboardSpy = jasmine.createSpy('writeText').and.resolveTo();
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: clipboardSpy },
      configurable: true
    });

    await TestBed.configureTestingModule({ imports: [CodeBlockComponent] }).compileComponents();
    const fixture = TestBed.createComponent(CodeBlockComponent);
    fixture.componentInstance.title = 'Sample';
    fixture.componentInstance.description = 'desc';
    fixture.componentInstance.code = 'const n = 1;';
    fixture.detectChanges();

    await fixture.componentInstance.copyCode();
    expect(clipboardSpy).toHaveBeenCalledWith('const n = 1;');
    expect(fixture.componentInstance.copied).toBeTrue();

    jasmine.clock().tick(1200);
    expect(fixture.componentInstance.copied).toBeFalse();
    jasmine.clock().uninstall();
  });
});
