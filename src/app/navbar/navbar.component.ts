import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { Role } from '../model/role.enum';
import { User } from '../model/user.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser: User = new User();

  cartQuantity = 0;
    
  show: boolean = false;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) {
    cartService.getCartObservable().subscribe(
      data => this.cartQuantity = data.totalCount
    );

    this.authService.currentUser.subscribe(
      data => {
        this.currentUser = data;
      });
  }

  ngOnInit(): void {
  }

  isAdmin() {
    return this.currentUser?.role === Role.ADMIN;
  }

  logout() {
    this.authService.logoutService();
    this.cartService.clearCartService();
    this.router.navigate(["/home"])
      .then(() => {
        window.location.reload();
      });
  }
}
