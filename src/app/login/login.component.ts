import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { CartService } from 'src/app/service/cart.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  message: string = "";

  emptyUsername: string = "border: 1px solid grey";
  emptyPassword: string = "border: 1px solid grey";
  isUsernameEmpty = false;
  isPasswordEmpty = false;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router,
  ) {
    if (this.authService.currentUserValue?.userId) {
      this.router.navigate(["/profile"])
      return;
    }
  }

  ngOnInit(): void {
  }

  getUsername(username: string) {
    if (username.length <= 0) {
      this.emptyUsername = "border: 2px solid red";
      this.isUsernameEmpty = false;
    }
    else {
      this.emptyUsername = "border: 1px solid grey";
      this.isUsernameEmpty = true;
    }
  }

  getPassword(password: string) {
    if (password.length <= 0) {
      this.emptyPassword = "border: 2px solid red";
      this.isPasswordEmpty = false;
    }
    else {
      this.emptyPassword = "border: 1px solid grey";
      this.isPasswordEmpty = true;
    }
  }

  login() {
    if (this.isUsernameEmpty === false) {
      this.emptyUsername = "border: 2px solid red";
    }
    if (this.isPasswordEmpty === false) {
      this.emptyPassword = "border: 2px solid red";
    }
    if (this.isUsernameEmpty === true && this.isPasswordEmpty === true) {
      this.authService.loginService(this.user).subscribe({
        next: () => {
          if (this.cartService.cart.totalCount > 0) {
            this.router.navigate(["/cart"]);
            return;
          }
          this.router.navigate(["/"])
        },
        error: err => {
          this.message = "Username or password is incorect!"
          console.log(err);
        }
      })
    }
  }
}
