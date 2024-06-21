import { Component, inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginServices = inject(LoginService);
  private router=inject(Router);

  public formLogin: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onLogin() {
    if (!this.formLogin.valid) return;

    let objAuth = {
      username: this.formLogin.controls['email'].value,
      password: this.formLogin.controls['password'].value,
    };
    this.loginServices.login(objAuth).subscribe(
      (resp) => {
        console.log(resp);
        localStorage.setItem('token', resp.access_token);
        this.router.navigateByUrl('/panel')
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
