import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  imports: [CommonModule, FormsModule],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css',
})
export class Contactus {
  hasChanges: boolean = true;

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
    this.hasChanges = false;
  }
}
