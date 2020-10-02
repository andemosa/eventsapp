import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: `login.component.html`,
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
    `,
  ],
})
export class LoginComponent {
  userName;
  password;
  loginInvalid = false;

  constructor(private auth: AuthService, private router: Router) {}
  login(formValues) {
    this.auth
      .loginUser(formValues.userName, formValues.password)
      .subscribe((resp) => {
        if (!resp) {
          this.loginInvalid = true;
        } else {
          this.router.navigate(['/user/profile']);
        }
      });
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
