import { routes } from './app.routes';
import { Home } from './home/home';
import { Login } from './login/login';

describe('routes', () => {
  it('routes / to Home and redirects **', () => {
    expect(routes).toEqual([
      { path: '', component: Home },
      { path: 'login', component: Login },
      { path: '**', redirectTo: '' },
    ]);
  });
});
