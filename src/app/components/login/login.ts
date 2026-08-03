import { Component } from '@angular/core';
import { UserInformation } from '../../services/user-information';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  myTimer;

  constructor(private userInformation: UserInformation) { // Dependency Injection
    this.myTimer = setInterval(() => {
      console.log('I am setInterval From Login Component...');
    }, 1000);

    console.log(this.myTimer);
  }

  ngOnInit() {
    console.log('Login ngOnInit...');
    console.log('Current user', this.userInformation.getCurrentUser())
  }
  ngOnDestroy() {
    // this function gets called when a component is destroyed
    console.log('Login ngOnDestroy');
    clearInterval(this.myTimer);
  }
}
