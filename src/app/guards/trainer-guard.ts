import { CanActivateFn } from '@angular/router';
import { UserInformation } from '../services/user-information';
import { inject } from '@angular/core';

export const trainerGuard: CanActivateFn = (route, state) => {
  let userInformation=inject(UserInformation);
  if(userInformation.getUserRole() === 'trainer'){
    return true;
  } else {
    alert("you are not allowed to open this page");
    return false;

  }
  
};
