import { Component } from '@angular/core';
import { Databinding } from "../databinding/databinding";

@Component({
  selector: 'app-body',
  imports: [Databinding],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
