import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ratings',
  imports: [CommonModule, FormsModule],
  templateUrl: './ratings.html',
  styleUrl: './ratings.css',
})
export class Ratings {

  rating = 0;
  stars = [1,2,3,4,5];
}
