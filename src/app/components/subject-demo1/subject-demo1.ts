import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-subject-demo1',
  imports: [],
  templateUrl: './subject-demo1.html',
  styleUrl: './subject-demo1.css',
})
export class SubjectDemo1 {
  ngOnInit() {
    this.subject_demo1();
    this.behaviorSubject_demo();
    this.replaySubject_demo();
    this.asyncSubject_demo();
  }

  subject_demo1() {
    let carSubject = new Subject(); //Producer
    carSubject.next('Tata');

    let subscriber1 = carSubject.subscribe((car) => console.log('subscribe1: ', car));
    carSubject.next('Honda');
    let subscriber2 = carSubject.subscribe((car) => console.log('subscribe2: ', car));
    carSubject.next('Maruti');
    carSubject.next('Hyundai');
  }

  behaviorSubject_demo() {
    let carSubject = new BehaviorSubject('Toyota');
    carSubject.next('Tata');

    let subscriber1 = carSubject.subscribe((car) => console.log('subscriber1: ', car));
    carSubject.next('Honda');
    let subscriber2 = carSubject.subscribe((car) => console.log('subscriber2: ', car));
    carSubject.next('Maruti');
    carSubject.next('Hyundai');
  }

  replaySubject_demo() {
    let carSubject = new ReplaySubject();
    carSubject.next('Tata');
    let subscriber1 = carSubject.subscribe((car) => console.log('subscriber1: ', car));
    carSubject.next('Honda');
    let subscriber2 = carSubject.subscribe((car) => console.log('subscriber2: ', car));
    carSubject.next('Maruti');
    carSubject.next('Hyundai');
  }

  asyncSubject_demo() {
    let carSubject = new AsyncSubject();
    carSubject.next('Tata');
    let subscriber1 = carSubject.subscribe((car) => console.log('subscriber1: ', car));
    carSubject.next('Honda');
    let subscriber2 = carSubject.subscribe((car) => console.log('subscriber2: ', car));
    carSubject.next('Maruti');
    carSubject.next('Hyundai');
    carSubject.complete();
  }
}
