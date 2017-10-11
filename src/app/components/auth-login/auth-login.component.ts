import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent {

  user = new User({
    username: '',
    password: ''
  });

  error: string;
  message: string;

  constructor(private auth: AuthService,  private router: Router) { }

  login() {
    this.error = null;
    this.auth.login(this.user).subscribe(
      (user) => {
        if (user.username) {
          this.user = user;
          this.router.navigate(['/profile'])
        } else {this.message}
      },
      (err) => this.error = err
    );
  }

}
