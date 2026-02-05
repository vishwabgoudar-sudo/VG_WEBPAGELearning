import { appRoutes } from '../../../src/app/app.routes';

describe('appRoutes', () => {
  it('contains default, full-stack, and wildcard routes', () => {
    const paths = appRoutes.map((route) => route.path);

    expect(paths).toContain('');
    expect(paths).toContain('full-stack-development');
    expect(paths).toContain('**');
  });
});
