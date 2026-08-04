import { Component, DoCheck, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Child1Demo } from '../child1-demo/child1-demo';
import { Child2Demo } from '../child2-demo/child2-demo';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Cart } from '../cart/cart';

@Component({
  selector: 'app-parent-demo',
  imports: [Child1Demo, Child2Demo, FormsModule, Cart],
  templateUrl: './parent-demo.html',
  styleUrl: './parent-demo.css',
})
export class ParentDemo implements OnChanges, OnInit, DoCheck{
  @ViewChild('myInputBox') myInputBox: any;  // Links to #myInputBox in the html

  a = 10;
  //a: number;
  parentCourseName = '';

  cartArr = [{ id: 1, name: 'laptop', quantity: 1 }];

  addItemToCart() {
    this.cartArr.push({ id: 2, name: 'mobile', quantity: 3 });
    console.log(this.cartArr)
  }

  receiveDataFromChild(receiveDataFromChild: any) {
    this.parentCourseName = receiveDataFromChild;
  }

  f1(){
    console.log('I am f1...')
  }


  constructor(private httpClient: HttpClient) {
    // Dependency Injection
    console.log('Parent constructor');
    console.log(this.myInputBox);
    this.a = 10; // initialize class variables
    // let obj = new HttpClient();
  }
  ngOnChanges() {
    console.log('Parent ngOnChanges');
  }
  ngOnInit() {
    console.log('Parent ngOnInit');
  }
  ngDoCheck() {
    console.log('Parent ngDoCheck');
  }
  ngAfterContentInit() {
  console.log('Parent ngAfterContentInit');
  }
  ngAfterContentChecked() {
  console.log('Parent ngAfterContentChecked')
  }
  ngAfterViewInit() {
    console.log('Parent ng After View Init');
    console.log(this.myInputBox);
    this.myInputBox.nativeElement.style.backgroundColor = 'lightgreen';
    this.myInputBox.nativeElement.focus();
    
  }
  ngAfterViewChecked() {
  console.log('Parent ngAfterViewChecked');
  }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }
}



/*
Parent ngOnChanges almost never runs usefully here — ParentDemo has 
no inputs from a grandparent. No @Input → nothing for ngOnChanges to react to.
*/

/*
ngDoCheck() — on every change detection cycle
It runs much more often — whenever Angular checks the component (clicks, typing, timers, etc.), even if no @Input changed.

Examples in your app:

typing in the parent input
clicking Toggle on login/logout
any UI event that triggers change detection
ngDoCheck
Called on every single change detection run, regardless of whether any input actually changed.
This means it fires very frequently — on any event, timer, HTTP response, etc. that triggers Angular's change detection, even in completely unrelated parts of the app (if this component is in the render tree).
It exists so you can implement custom change detection logic for cases ngOnChanges can't catch — e.g., detecting a mutation inside an array/object that kept the same reference.
*/
