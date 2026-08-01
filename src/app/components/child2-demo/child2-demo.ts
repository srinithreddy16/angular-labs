import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2-demo',
  imports: [],
  templateUrl: './child2-demo.html',
  styleUrl: './child2-demo.css',
  inputs: ['aChild2'],
  outputs: ['courseNameEvent'],
})
export class Child2Demo {
  aChild2: any;
  b = 200;
  courseName = 'Angular';

  courseNameEvent = new EventEmitter<string>();

  sendDataToParent() {
    this.courseNameEvent.emit(this.courseName);
  }
}
