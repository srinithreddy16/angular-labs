import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { concatMap, mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-observable-demo3',
  imports: [],
  templateUrl: './observable-demo3.html',
  styleUrl: './observable-demo3.css',
})

export class ObservableDemo3 {
  httpClient = inject(HttpClient);

  ngOnInit() {
    this.forkjoin_demo();
    this.mergemap_demo();
    this.concatmap_demo();
  }

  forkjoin_demo() {
    let api_1 = this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    let api_2 = this.httpClient.get('https://jsonplaceholder.typicode.com/comments');
    let api_3 = this.httpClient.get('https://jsonplaceholder.typicode.com/todos');
    forkJoin([api_1, api_2, api_3]).subscribe((responseArr) => {
      console.log(responseArr);
    });
  }


  //We get results in parallel all at once
  mergemap_demo() {
    let userPublisher = of(1, 2, 3, 4, 5); // outer observable

    userPublisher.pipe(mergeMap(userId => {
      return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`) // inner observable
    })).subscribe(cartResponse => {
      console.log(cartResponse)
    });
  }


  //In concatmap we get the results in sequential order after completing one another
  concatmap_demo() {
    let userPublisher = of(1, 2, 3, 4, 5); // outer observable

    userPublisher.pipe(concatMap(userId => {
      return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`) // inner observable
    })).subscribe(cartResponse => {
      console.log(cartResponse)
    });
  }
}

