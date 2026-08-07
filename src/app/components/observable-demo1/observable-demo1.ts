import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-observable-demo1',
  imports: [],
  templateUrl: './observable-demo1.html',
  styleUrl: './observable-demo1.css',
})
export class ObservableDemo1 {
  user_api = 'https://jsonplaceholder.typicode.com/users';
  httpClient = inject(HttpClient);

  ngOnInit() {
    this.fetchData_Javascript();
    this.fetchData_Angular();
  }

  //PROMISE - Java Script
  fetchData_Javascript() {
    fetch(this.user_api).then((response) => {
      response.json().then((userArr) => {
        console.log('userArr usign Fetch:: ', userArr);
      });
    });
  }

  //OBSERVABLE - Angular
  fetchData_Angular() {
    this.httpClient.get(this.user_api).subscribe((response) => {
      console.log('userArr usign httpClient:: ', response);
    });
  }
}
