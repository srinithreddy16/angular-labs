import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserInformation {
  private current_user = 'Srinith';
  private role = 'trainer';

  getCurrentUser() {
    return this.current_user;
  }

  getUserRole(){
    return this.role;
  }

  
}
