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

  login() {
    this.authService.loginService(this.user).subscribe({
      next: () => {
        if (this.cartService.cart.totalCount > 0) {
          this.router.navigate(["/cart"]);
          return;
        }
        this.router.navigate(["/profile"])
      },
      error: err => {
        this.message = "Username or password is incorect!"
        console.log(err);
      }
    })
  }
}
