import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DialogDeleteOrderComponent } from '../dialog-delete-order/dialog-delete-order.component';
import { CartItem } from '../model/cart-item.model';
import { OrderStatus } from '../model/order-status.enum';
import { Order } from '../model/order.model';
import { AdminOrderService } from '../service/admin-order.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent implements OnInit {

  orders: Array<Order> = [];
  order: Order = new Order();

  items: Array<CartItem> = [];
  item!: CartItem;

  status: string = "";

  constructor(
    private adminOrderService: AdminOrderService,
    private toastrService: ToastrService,
    public matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.adminOrderService.getAllOrdersService().subscribe(data => {
      this.orders = data;
    })
  }

  updateStatus(order: Order) {
    if (order.status === OrderStatus.NEW) this.status = OrderStatus.DONE;
    if (order.status === OrderStatus.DONE) this.status = OrderStatus.CANCELED;
    if (order.status === OrderStatus.CANCELED) this.status = OrderStatus.NEW;

    this.adminOrderService.updateStatusService(order.orderId, this.status).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.toastrService.info("Could not update the status!");
        console.log(err);
      }
    })
  }

  deleteOrderDialog(order: Order) {
    const dialogRef = this.matDialog.open(DialogDeleteOrderComponent, { data: order.orderId });
    dialogRef.afterClosed().subscribe({
      next: result => {
        if (result === "true") {
          this.deleteOrder(order);
        }
      },
      error: error => {
        this.toastrService.warning("Could not delete this User!")
      }
    })
  }

  deleteOrder(order: Order) {
    this.adminOrderService.deleteOrderService(order).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.toastrService.warning("Could not delete this User!")
        console.log(err);
      }
    })
  }
}
