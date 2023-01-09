import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/model/product.model';
import { CartService } from 'src/app/shared/service/cart.service';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;

  constructor(
    activatedRoute: ActivatedRoute,
    productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {
    let linkName = activatedRoute.snapshot.params["linkName"] as string
    productService.getProductByNameService(linkName).subscribe(data => {
      this.product = data;
    })
  }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.addToCartService(this.product);
    this.router.navigateByUrl('/cart');
  }

}
