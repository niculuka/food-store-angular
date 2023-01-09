import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminUserComponent } from 'src/app/admin/admin-user/admin-user.component';

@Component({
  selector: 'app-dialog-delete-user',
  templateUrl: './dialog-delete-user.component.html',
  styleUrls: ['./dialog-delete-user.component.css']
})
export class DialogDeleteUserComponent implements OnInit {

  userName: any;

  constructor(@Inject(MAT_DIALOG_DATA) private data: AdminUserComponent) {
    this.userName = data;
  }

  ngOnInit(): void {
  }

}
