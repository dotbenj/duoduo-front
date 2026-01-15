import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { Login } from './login';

describe('Login', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login],
    }).compileComponents();
  });

  it('disables submit while form is invalid', () => {
    const fixture = TestBed.createComponent(Login);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button[type="submit"]') as HTMLButtonElement | null;
    expect(button?.disabled).toBe(true);
  });

  it('shows an error when email is invalid', () => {
    const fixture = TestBed.createComponent(Login);
    fixture.detectChanges();

    const component = fixture.componentInstance;
    component.form.controls.email.setValue('not-an-email');
    component.form.controls.email.markAsTouched();
    component.form.controls.password.setValue('secret');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.error')?.textContent).toContain('email valide');
  });

  it('alerts on submit with email and password', () => {
    const fixture = TestBed.createComponent(Login);
    const component = fixture.componentInstance;

    vi.spyOn(window, 'alert').mockImplementation(() => undefined);

    component.form.controls.email.setValue('test@example.com');
    component.form.controls.password.setValue('secret');
    fixture.detectChanges();

    const form = fixture.nativeElement.querySelector('form') as HTMLFormElement;
    form.dispatchEvent(new Event('submit'));

    expect(window.alert).toHaveBeenCalledWith('tentative de connexion test@example.com et secret');
  });
});
