import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/model/product.model';
import { AdminProductService } from '../service/admin-product.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteProductComponent } from '../dialog-delete-product/dialog-delete-product.component';
import { DialogUpdateComponent } from '../dialog-update/dialog-update.component';
import { DialogCreateComponent } from '../dialog-create/dialog-create.component';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  protected products: Array<Product> = [];
  protected product: Product = new Product();

  errorMessage: string = "";

  constructor(
    private adminProductService: AdminProductService,
    private router: Router,
    private toastrService: ToastrService,
    public matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.adminProductService.getAllProductsService().subscribe(data => {
      this.products = data;
    })
  }  

  viewProduct(product: Product) {
    this.router.navigate(['/product/' + product.linkName]);
  }

  createProductDialog() {
    const create = this.matDialog.open(DialogCreateComponent);
    create.afterClosed().subscribe({
      next: result => {
        if (result === "true") {
          this.toastrService.success("Created Product!")
        }
      },
      error: error => {
        this.toastrService.warning("Could not delete product!")
      }
    })
  }

  updateProductDialog(product: Product) {
    const update = this.matDialog.open(DialogUpdateComponent, { data: product });
    update.afterClosed().subscribe(result => {
      if (result !== "true") {
        window.location.reload();
      }
    })
  }

  deleteProductDialog(product: Product) {
    const dialogRef = this.matDialog.open(DialogDeleteProductComponent, { data: product.name });
    dialogRef.afterClosed().subscribe({
      next: result => {
        if (result === "true") {
          this.deleteProduct(product)
        }
      },
      error: error => {
        this.toastrService.warning("Could not delete product!")
      }
    })
  }

  deleteProduct(product: Product) {
    this.adminProductService.deleteProductService(product).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.toastrService.warning("Could not delete product!")
        this.errorMessage = "Could not delete product!";
        console.log(err);
      }
    })
  }

}
