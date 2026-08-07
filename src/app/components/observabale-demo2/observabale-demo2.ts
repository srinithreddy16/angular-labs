import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { from, range, interval, filter, map } from 'rxjs';

@Component({
  selector: 'app-observabale-demo2',
  imports: [CommonModule],
  templateUrl: './observabale-demo2.html',
  styleUrl: './observabale-demo2.css',
})
export class ObservabaleDemo2 {
  numbers = interval(1000);  //interval returns observable. interval(1000) is an RxJS creation function. It does not give you a normal number. It gives you a stream that emits 0, 1, 2, 3... every 1000 ms. Observable<number>

  // when you want to create 1 observable out of another observable, we use pipe
  even_numbers = this.numbers.pipe(filter((val) => val % 2 == 0));
  square_numbers = this.numbers.pipe(map((val) => val * val));

  // digital clock, Note: observable varibales should end with $
  currentTime$ = interval(1000).pipe(map(() => new Date().toLocaleTimeString()));

  ngOnInit(){
    this.from_demo();
    this.range_demo();
  }

  from_demo(){
    let cars = ['tata','honda','maruti'];
    let carsObs = from(cars);
    carsObs.subscribe((car) => console.log('car::', car));
  }

  range_demo(){
    let num_Obs = range(10,5);
    num_Obs.subscribe({
      next : (response)=>{console.log('Response: ',response)},
      error : (err)=>{console.log(err)},
      complete: ()=>{console.log('All data Received')},
    })

  }

}
