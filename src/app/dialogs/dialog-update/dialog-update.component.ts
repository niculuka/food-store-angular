import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminProductComponent } from 'src/app/admin/admin-product/admin-product.component';
import { Product } from 'src/app/shared/model/product.model';
import { AdminProductService } from 'src/app/shared/service/admin-product.service';

@Component({
  selector: 'app-dialog-update',
  templateUrl: './dialog-update.component.html',
  styleUrls: ['./dialog-update.component.css']
})
export class DialogUpdateComponent implements OnInit {

  product: any;

  errorMessage: string = "";
  imagelinkPrefix = "assets/images/";

  constructor(
    private adminProductService: AdminProductService,
    @Inject(MAT_DIALOG_DATA) private data: AdminProductComponent
    ) {
    this.product = data;
  }

  ngOnInit(): void {
  }

  updateProduct(product: Product) {
    this.product.linkName = this.product.name.replace(/\\|`+|~+|'+|\/+|\?/g, "").replace(/\s+/g, "-").toLowerCase();
    this.adminProductService.updateProductService(product).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.errorMessage = "Could not update product!";
        console.log(err);
      }
    })
  }

  onFileSelected(event: any) {
    const image: File = event.target.files[0];
    if (image) { 
      this.product.image = this.imagelinkPrefix + image.name;  
    }
  }

}
