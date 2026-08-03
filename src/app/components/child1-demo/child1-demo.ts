import { Component } from '@angular/core';

@Component({
  selector: 'app-child1-demo',
  imports: [],
  templateUrl: './child1-demo.html',
  styleUrl: './child1-demo.css',
  inputs: ['a', 'b', 'courseName'],
})
export class Child1Demo {
  a!: any;
  b!: any;
  courseName!: any;

  constructor() {
    console.log('child constructor');
  }
  ngOnChanges() {
    console.log('child ngOnChanges');
  }
  ngOnInit() {
    console.log('child ngOnInit');
  }
  ngDoCheck() {
    console.log('child ngDoCheck');
  }
  // ngAfterContentInit() {
  //   console.log('child ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('child ngAfterContentChecked')
  // }
  //ngAfterViewInit() {
  //console.log('child ngAfterViewInit');
  //}
  // ngAfterViewChecked() {
  //   console.log('child ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('child ngOnDestory');
  // }
}

