import { Component, signal } from '@angular/core';
import { email, form, FormField, minLength, required, validate } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-form-validation',
  imports: [FormField],
  templateUrl: './signal-form-validation.html',
  styleUrl: './signal-form-validation.css',
})
export class SignalFormValidation {
  loginModel = signal({ email: '', password: '', confirmPassword: '' });

  loginForm = form(this.loginModel, (schema) => {
    required(schema.email, { message: 'Email is required' });
    email(schema.email, { message: 'Invalid email' });
    required(schema.password, { message: 'Password is required' });
    required(schema.confirmPassword, { message: 'Confirm password is required' });
    validate(schema.confirmPassword, ({ value, valueOf }) =>
      value() !== valueOf(schema.password)
        ? { kind: 'mismatch', message: 'Passwords do not match' }
        : null,
    );
  });
  submit() {
    if (this.loginForm().valid()) {
      console.log(this.loginModel());
    }
  }
  reset() {
    this.loginModel.set({ email: '', password: '', confirmPassword: '' });
  }
}
