import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl="https://frontend-test-api.aircall.dev"
  private http=inject(HttpClient);
  isLogged = false;
  router=inject(Router);
  constructor() { }


  logout(){
    localStorage.removeItem('token');
    this.isLogged = false;
    this.router.navigate(['/auth']);
  }

  login(loginBody:any){
    return this.http.post<any>(`${this.baseUrl}/auth/login`, loginBody)
  }

  public isAuthenticated(): boolean {
    let token = localStorage.getItem('token');
    const jwtService = new JwtHelperService();
    if(token){
      if(jwtService.isTokenExpired(token)){
        localStorage.removeItem('token');
      }
      this.isLogged = !jwtService.isTokenExpired(token);
    }
    return this.isLogged;
  }


}
