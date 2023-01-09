import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminItemComponent } from 'src/app/admin/admin-item/admin-item.component';

@Component({
  selector: 'app-dialog-delete-item',
  templateUrl: './dialog-delete-item.component.html',
  styleUrls: ['./dialog-delete-item.component.css']
})
export class DialogDeleteItemComponent implements OnInit {

  productName: any;

  constructor(@Inject(MAT_DIALOG_DATA) private data: AdminItemComponent) {
    this.productName = data;
  }

  ngOnInit(): void {
  }

}
