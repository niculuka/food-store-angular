import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
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
  currentUserShow: string = "";

  cartQuantity = 0;
    
  show: boolean = false;

  @ViewChild('txt') txt: ElementRef | undefined;

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
        if (this.currentUser) {
          this.currentUserShow = this.currentUser.username.slice(0,10);
        }
      });
  }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (this.txt?.nativeElement.contains(event.target)) {
      console.log("INSIDE");
    } else {
      this.show = false;
      console.log("OUTSIDE");
    }
  }

  closeMenu() {
    this.show = false;
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
