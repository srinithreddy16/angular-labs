import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, switchMap, map, exhaustMap, fromEvent } from 'rxjs';

@Component({
  selector: 'app-observable-demo4',
  imports: [
    ReactiveFormsModule,CommonModule
  ],
  templateUrl: './observable-demo4.html',
  styleUrl: './observable-demo4.css',
})
export class ObservableDemo4 {
  searchResult$: Observable<any> | undefined;
  searchForm: any;
  constructor(private http: HttpClient) {
    this.searchForm = new FormGroup({
      searchField: new FormControl(),
    });
  }
  ngOnInit() {
    this.searchResult$ = this.searchForm.get('searchField').valueChanges.pipe(   //searchResult returns an observable
      switchMap((term) => this.http.get<any>(`https://dummyjson.com/users/search?q=${term}`)),
      map((response: any) => (response.users.length > 0 ? response.users : [])),
    );
  }

  // ==============Exhaust map=========================
  @ViewChild('loginBtn') loginBtn!: ElementRef;

  ngAfterViewInit() {
    fromEvent(this.loginBtn.nativeElement, 'click').pipe(exhaustMap((val) => {
      return this.http.get('https://httpbin.org/delay/5'); // Dummy Login API
    })).subscribe({
      next: (res) => console.log('Response:', res),
      error: (err) => console.error('Error:', err),
    })
  }
}
