import { Component } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { DirectivesDemo } from '../directives-demo/directives-demo';

@Component({
  selector: 'app-body',
  imports: [Databinding, DirectivesDemo],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
