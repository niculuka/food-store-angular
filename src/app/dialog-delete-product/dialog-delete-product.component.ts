import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminProductComponent } from '../admin-product/admin-product.component';

@Component({
  selector: 'app-dialog-delete-product',
  templateUrl: './dialog-delete-product.component.html',
  styleUrls: ['./dialog-delete-product.component.css']
})
export class DialogDeleteProductComponent implements OnInit {

  productName: any;

  constructor(@Inject(MAT_DIALOG_DATA) private data: AdminProductComponent) {
    this.productName = data;
  }

  ngOnInit(): void {
  }

}
