import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.html',
  styleUrl: './category.css',
  inputs:['categoryObj']
})
export class Category {
  categoryObj:any;
}