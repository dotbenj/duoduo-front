import { routes } from './app.routes';
import { Home } from './home/home';

describe('routes', () => {
  it('routes / to Home and redirects **', () => {
    expect(routes).toEqual([{ path: '', component: Home }, { path: '**', redirectTo: '' }]);
  });
});

