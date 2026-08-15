import { Component } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgComponentOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  heavyComponent: any;
  constructor() {
    import('../heavy-component/heavy-component').then((m) => {
      this.heavyComponent = m.HeavyComponent;
    });
  }
}
