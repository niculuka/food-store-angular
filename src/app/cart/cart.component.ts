import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';
import { CartItem } from 'src/app/model/cart-item.model';
import { CartService } from 'src/app/service/cart.service';
import { DELIVERY, PICK_UP } from '../constants/const';
import { Order } from '../model/order.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart!: Cart;
  order: Order = new Order();
  
  delivery: number = DELIVERY;
  pickUp: number = PICK_UP;

  message: string = ""

  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((data) => {
      this.cart = data;
    })
    const deliveryJson = localStorage.getItem('delivery-ls');
    if (deliveryJson) {
      this.order.favoriteDelivery = JSON.parse(deliveryJson);
    }
  }

  ngOnInit(): void {    
  }

  isEmpty() {
    return this.cart.items.length === 0;
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    let id: any = cartItem.product.productId;
    this.cartService.changeQuantityService(id, quantity);
  }

  removeFromCart(cartItem: CartItem) {
    let id: any = cartItem.product.productId;
    this.cartService.removeFromCartService(id);
  }

  clearCart() {
    this.cartService.clearCartService();
  }

  deliveryOption() {
    const deliveryJson = JSON.stringify(this.order.favoriteDelivery);
    localStorage.setItem('delivery-ls', deliveryJson);
  }

}
