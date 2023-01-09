import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DialogDeleteTokenComponent } from 'src/app/dialogs/dialog-delete-token/dialog-delete-token.component';
import { Token } from 'src/app/shared/model/token.model';
import { AdminTokenService } from '../../shared/service/admin-token.service';

@Component({
  selector: 'app-admin-token',
  templateUrl: './admin-token.component.html',
  styleUrls: ['./admin-token.component.css']
})
export class AdminTokenComponent implements OnInit {

  protected tokens: Array<Token> = [];
  protected token!: Token;

  constructor(
    private adminTokenService: AdminTokenService,
    private toastrService: ToastrService,
    public matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.adminTokenService.getAllTokensService().subscribe(data => {
      this.tokens = data;
    })
  }

  deleteTokenDialog(token: Token) {
    const dialogRef = this.matDialog.open(DialogDeleteTokenComponent, { data: token.tokenId });
    dialogRef.afterClosed().subscribe({
      next: result => {
        if (result === "true") {
          this.deleteToken(token)
        }
      },
      error: error => {
        this.toastrService.warning("Could not delete this token!")
      }
    })
  }

  deleteToken(token: Token) {
    this.adminTokenService.deleteTokenService(token).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.toastrService.warning("Could not delete this token!")
        console.log(err);
      }
    })
  }

}
