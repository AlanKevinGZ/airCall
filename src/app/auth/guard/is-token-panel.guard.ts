import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';

export const isTokenPanelGuard: CanActivateFn = (route, state) => {
  let loginService=inject(LoginService)
  let router=inject(Router);
  
  if(localStorage.getItem('token')){
    
    if(loginService.isAuthenticated()){
      return true;
    }else{
      loginService.logout()
     }
  }

  router.navigate(['/auth']);
  return false;

};
