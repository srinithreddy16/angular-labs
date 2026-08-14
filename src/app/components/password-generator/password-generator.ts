import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-generator',
  imports: [FormsModule],
  templateUrl: './password-generator.html',
  styleUrl: './password-generator.css',
})
export class PasswordGenerator {
  length = 12;
  includeUppercase = true;
  includeLowercase = true;
  includeNumbers = true;
  includeSymbols = false;

  password = '';
  errorMessage = '';
  copyMessage = '';

  generatePassword() {
    this.errorMessage = '';
    this.copyMessage = '';

    if (this.length < 4 || this.length > 50) {
      this.errorMessage = 'Password length must be between 4 and 50.';
      this.password = '';
      return;
    }

    let characters = '';
    if (this.includeUppercase) {
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (this.includeLowercase) {
      characters += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (this.includeNumbers) {
      characters += '0123456789';
    }
    if (this.includeSymbols) {
      characters += '!@#$';
    }

    if (!characters) {
      this.errorMessage = 'Please select at least one character type.';
      this.password = '';
      return;
    }

    let generated = '';
    for (let i = 0; i < this.length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generated += characters[randomIndex];
    }
    this.password = generated;
  }

  copyPassword() {
    if (!this.password) {
      return;
    }
    navigator.clipboard.writeText(this.password).then(() => {
      this.copyMessage = 'Password copied to clipboard.';
    });
  }
}
