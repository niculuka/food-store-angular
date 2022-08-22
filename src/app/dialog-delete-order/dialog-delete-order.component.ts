import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminOrderComponent } from '../admin-order/admin-order.component';

@Component({
  selector: 'app-dialog-delete-order',
  templateUrl: './dialog-delete-order.component.html',
  styleUrls: ['./dialog-delete-order.component.css']
})
export class DialogDeleteOrderComponent implements OnInit {

  orderId: any;

  constructor(@Inject(MAT_DIALOG_DATA) private data: AdminOrderComponent) {
    this.orderId = data;
  }

  ngOnInit(): void {
  }

}
