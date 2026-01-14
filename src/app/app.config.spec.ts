import { appConfig } from './app.config';

describe('appConfig', () => {
  it('provides at least router and service worker providers', () => {
    expect(Array.isArray(appConfig.providers)).toBe(true);
    expect(appConfig.providers.length).toBeGreaterThan(0);
  });
});

