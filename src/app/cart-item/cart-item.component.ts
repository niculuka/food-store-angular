import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { DELIVERY } from '../constants/const';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input()
  order!: Order;

  constructor() { }

  ngOnInit(): void {
    const deliveryJson = localStorage.getItem('delivery-ls');    
    if (deliveryJson) {
      this.order.favoriteDelivery = JSON.parse(deliveryJson)
      this.order.totalPrice = this.order.favoriteDelivery + this.order.subtotal;
      return;
    } 
    this.order.favoriteDelivery = DELIVERY;
    this.order.totalPrice = Math.round((this.order.favoriteDelivery + this.order.subtotal) * 100) / 100;
  }

}
