import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registration-form.html',
  styleUrl: './registration-form.css',
})
export class RegistrationForm {
  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    terms: new FormControl(false, [Validators.requiredTrue]),
    address: new FormControl('', [Validators.required, Validators.maxLength(200)]),
  });

  submitForm(){
    if(this.registerForm.valid){
      console.log('Form Submitted:: ', this.registerForm.value);
    } else{
      // mark every field as touched so validation messages show up,
      // even for fields the user never clicked into
      this.registerForm.markAllAsTouched();
    }
  }

}
