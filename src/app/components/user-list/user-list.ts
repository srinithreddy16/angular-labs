import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import userData from './user_data';

@Component({
  selector: 'app-user-list',
  imports: [RouterLink],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  userArr = userData;
}
