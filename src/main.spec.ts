import { beforeEach, describe, expect, it, vi } from 'vitest';

const bootstrapApplicationMock = vi.fn();

vi.mock('@angular/platform-browser', () => ({
  bootstrapApplication: bootstrapApplicationMock,
}));

describe('main', () => {
  beforeEach(() => {
    vi.resetModules();
    bootstrapApplicationMock.mockReset();
  });

  it('bootstraps the application', async () => {
    bootstrapApplicationMock.mockImplementation(() => Promise.resolve());

    const { App } = await import('./app/app');
    const { appConfig } = await import('./app/app.config');
    await import('./main');

    expect(bootstrapApplicationMock).toHaveBeenCalledWith(App, appConfig);
  });

  it('logs bootstrap errors', async () => {
    const err = new Error('bootstrap failed');
    bootstrapApplicationMock.mockImplementation(() => Promise.reject(err));

    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
    await import('./main');
    await Promise.resolve();

    expect(consoleError).toHaveBeenCalledWith(err);
    consoleError.mockRestore();
  });
});
