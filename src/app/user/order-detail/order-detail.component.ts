import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/shared/model/cart-item.model';
import { Order } from 'src/app/shared/model/order.model';
import { User } from 'src/app/shared/model/user.model';

@Component({
  selector: 'order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {  

  @Input()
  order: Order = new Order();

  @Input()
  items: Array<CartItem> = [];

  @Input()
  user: User = new User();

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
