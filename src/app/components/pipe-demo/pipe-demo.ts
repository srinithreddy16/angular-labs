import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remainingpipe-pipe';

@Component({
  selector: 'app-pipe-demo',
  imports: [CommonModule, FormsModule, RemainingPipe],
  templateUrl: './pipe-demo.html',
  styleUrl: './pipe-demo.css',
})
export class PipeDemo {
  userName = 'sachIn teNdUlkAr';
  salary = 5000;
  dateObj = new Date();

  user = { name: 'Sanjay', role: 'Trainer', address: 'Bangalore' };
  cars = ['Tata', 'Honda', 'Maruti', 'Hyundai', 'Toyota'];

  msg = 'Hello';
}