import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/shared/model/cart-item.model';
import { Order } from 'src/app/shared/model/order.model';
import { AuthService } from '../../shared/service/auth.service';
import { OrderService } from '../../shared/service/order.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {

  orders: Array<Order> = [];
  order: Order = new Order();

  items: Array<CartItem> = [];
  item!: CartItem;

  id!: any;
  orderExist: boolean = false;

  constructor(
    private orderService: OrderService,
    private authService: AuthService,
    private toastrService: ToastrService
  ) {
    this.authService.currentUser.subscribe(data => {
      this.id = data.userId;
    })
  }

  ngOnInit(): void {
    this.orderService.getMyOrdersService(this.id).subscribe(data => {
      this.orders = data;
      if (this.orders.length === 0) {
        this.toastrService.warning("NO ORDER YET!")
        return;
      }
      this.orderExist = true;
    })
  }

  reOrder() {
    this.toastrService.warning("UNDER COSTRUCTION!")
  }

}
