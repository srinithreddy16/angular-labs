import { UserInformation } from './../../services/user-information';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class Logout {
  userInformation = inject(UserInformation); // Dependency Injection

  ngOnInit() {
    console.log('Logout ngOnInit...');
    console.log('Current user: ', this.userInformation.getCurrentUser());
  }
  ngOnDestroy() {
    console.log('Logout ngOnDestroy');
  }
}
