import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminTokenComponent } from 'src/app/admin/admin-token/admin-token.component';

@Component({
  selector: 'app-dialog-delete-token',
  templateUrl: './dialog-delete-token.component.html',
  styleUrls: ['./dialog-delete-token.component.css']
})
export class DialogDeleteTokenComponent implements OnInit {

  tokenId: any;

  constructor(@Inject(MAT_DIALOG_DATA) private data: AdminTokenComponent) {
    this.tokenId = data;
  }

  ngOnInit(): void {
  }

}
