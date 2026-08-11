import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {

  user = {
    firstName: 'Virat',
    lastName: 'Kohli',
    email: '',
    address: {
      street: '',
      city: '',
      pincode: '',
    },
  };
  submitMyForm(formData: NgForm) {
    console.log('Form Submitted::', formData);
  }


}
