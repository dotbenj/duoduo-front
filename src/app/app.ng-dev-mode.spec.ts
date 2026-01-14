import { describe, expect, it, vi } from 'vitest';

describe('App (ngDevMode coverage)', () => {
  it('can be imported with ngDevMode=false', async () => {
    const previous = (globalThis as any).ngDevMode;
    try {
      (globalThis as any).ngDevMode = false;
      vi.resetModules();

      const { App } = await import('./app');
      expect(App).toBeTruthy();
    } finally {
      if (previous === undefined) {
        delete (globalThis as any).ngDevMode;
      } else {
        (globalThis as any).ngDevMode = previous;
      }
    }
  });
});

