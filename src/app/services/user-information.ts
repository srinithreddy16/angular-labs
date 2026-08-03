import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserInformation {
  private current_user = 'Srinith';

  getCurrentUser() {
    return this.current_user;
  }

  
}
