import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Order } from 'src/app/shared/model/order.model';
import { AuthService } from 'src/app/shared/service/auth.service';
import { CartService } from 'src/app/shared/service/cart.service';
import { PaymentType } from '../../shared/enums/food.enum';
import { OrderAgreementComponent } from '../order-agreement/order-agreement.component';
import { OrderService } from '../../shared/service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order: Order = new Order();

  message: string = "";
  conditions!: boolean;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router,
    private orderService: OrderService,
    public matDialog: MatDialog
  ) {
    const cart = cartService.getCart();
    this.order.items = cart.items;
    this.order.subtotal = Math.round(cart.subtotal * 100) / 100;

    const paymentJson = localStorage.getItem('payment-ls');
    if (paymentJson) {
      this.order.paymentType = JSON.parse(paymentJson);
    }

    const conditionsJson = localStorage.getItem('conditions-ls');
    if (conditionsJson) {
      this.conditions = JSON.parse(conditionsJson);
    } else {
      this.conditions = false;
    }
  }

  ngOnInit(): void {
    let userId: any = this.authService.currentUserValue.userId;
    this.order.userIdGet = userId;
    this.order.nameGet = this.authService.currentUserValue.name;
    this.order.emailGet = this.authService.currentUserValue.email;
    this.order.addressGet = this.authService.currentUserValue.address;
    this.order.phoneGet = this.authService.currentUserValue.phone;
  }  

  paymentMethod() {
    const paymentJson = JSON.stringify(this.order.paymentType);
    localStorage.setItem('payment-ls', paymentJson);
  }

  conditionsCheck() {
    const conditionsJson = JSON.stringify(this.conditions);
    localStorage.setItem('conditions-ls', conditionsJson);
  }

  conditionsAgreement() {
    const agrement = this.matDialog.open(OrderAgreementComponent);
  }

  errorMessage() {
    return this.conditions === false;
  }

  payWithCard() {
    return this.order.paymentType === PaymentType.CARD;
  }

  createOrder() {
    if (this.conditions) {
      if (!this.authService.currentUserValue.userId) {
        return;
      }
      this.order.userIdGet = this.authService.currentUserValue.userId;

      if (this.order.paymentType === PaymentType.CASH) {
        this.creatingMethod();
        return;
      }
      if (this.order.paymentType === PaymentType.CARD) {
        // Other Validations here!
        this.creatingMethod();
      }
    } else {
      this.message = "You must be agree with conditions!!!"
    }
  }

  creatingMethod() {
    this.orderService.createOrderService(this.order).subscribe({
      next: () => {
        this.cartService.clearCartService();
        this.router.navigate(["/products"]);
        this.toastrService.success("Order sent")
      },
      error: (err) => {
        this.toastrService.error(err.error, "Order could not be saved!")
      }
    })
  }
  
}
