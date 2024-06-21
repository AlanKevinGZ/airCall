import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isTokenGuard: CanActivateFn = (route, state) => {
 
  let router=inject(Router);
  if (localStorage.getItem('token')) {
    router.navigate(['/panel']);
    return false;
   }
  
   return true;




};
