import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../model/order.model';

@Component({
  selector: 'payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  @Input()
  order!: Order;

  constructor() { }

  ngOnInit(): void {
  }

  // checkoutProceed() {
  //   console.log(this.order);
  // }

}
