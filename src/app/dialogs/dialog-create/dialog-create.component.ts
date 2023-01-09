import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/shared/model/product.model';
import { AdminProductComponent } from '../../admin/admin-product/admin-product.component';
import { AdminProductService } from '../../shared/service/admin-product.service';

@Component({
  selector: 'app-dialog-create',
  templateUrl: './dialog-create.component.html',
  styleUrls: ['./dialog-create.component.css']
})
export class DialogCreateComponent implements OnInit {

  newProduct: Product = new Product();

  errorMessage: string = "";
  imagelinkPrefix = "assets/images/";

  constructor(
    private adminProductService: AdminProductService,
    @Inject(MAT_DIALOG_DATA) private data: AdminProductComponent) {
  }

  ngOnInit(): void {
  }

  createProduct() {
    this.newProduct.linkName = this.newProduct.name.replace(/\\|`+|~+|'+|\/+|\?/g, "").replace(/\s+/g, "-").toLowerCase();
    
    this.adminProductService.createProductService(this.newProduct).subscribe({
      next: () => {
        window.location.reload();
      },
      error: error => {
        this.errorMessage = "Could not create product!";
        console.log(error);
      }
    })
  }

  onFileSelected(event: any) {
    const newImage: File = event.target.files[0];
    if (newImage) {
      this.newProduct.image = this.imagelinkPrefix + newImage.name;       
    }
  }

}
