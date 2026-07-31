import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remainingpipe-pipe';
import { OrdinalPipe } from '../../pipes/ordinal-pipe';
import { CreditcardPipe } from '../../pipes/creditcard-pipe';
import { AgePipe } from '../../pipes/age-pipe';
import { SalutationPipe } from '../../pipes/salutation-pipe';
import { MysortPipe } from '../../pipes/mysort-pipe';

@Component({
  selector: 'app-pipe-demo',
  imports: [CommonModule, FormsModule, RemainingPipe, OrdinalPipe, CreditcardPipe, AgePipe, SalutationPipe, MysortPipe],
  templateUrl: './pipe-demo.html',
  styleUrl: './pipe-demo.css',
})
export class PipeDemo {
  userName = 'sachIn teNdUlkAr';
  salary = 5000;
  dateObj = new Date();

  user = { name: 'Sanjay', role: 'Trainer', address: 'Bangalore' };
  cars = ['Tata', 'Honda', 'Maruti', 'Hyundai', 'Toyota'];

  msg = '';
  num="";
  cardNum=""
  age = ""
  dob = '';

    employees = [
    { id: 1, name: 'Rohit Sharma', gender: 'male', department: 'Sales', salary: 45000 },
    { id: 2, name: 'Priya Verma', gender: 'female', department: 'HR', salary: 38000 },
    { id: 3, name: 'Amit Kumar', gender: 'male', department: 'IT', salary: 62000 },
    { id: 4, name: 'Sneha Patil', gender: 'female', department: 'Finance', salary: 55000 },
    { id: 5, name: 'Karan Mehta', gender: 'male', department: 'IT', salary: 48000 },
  ];

  arr = [10,50,20,30,40];

  
}