import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../model/cart.model';
import { CartItem } from '../model/cart-item.model';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() { }

  addToCartService(product: Product): void {
    let cartItem = this.cart.items.find(item => item.product.productId === product.productId);
    if (cartItem)
      return;
    this.cart.items.push(new CartItem(product));
    this.setCartToLocalStorage();
  }

  changeQuantityService(id: number, quantity: number) {
    let cartItem = this.cart.items.find(item => item.product.productId === id);
    if (!cartItem)
      return;
    cartItem.quantity = quantity;
    cartItem.price = Math.round((quantity * cartItem.product.price) * 100)/100;
    this.setCartToLocalStorage();
  }

  removeFromCartService(id: number): void {
    this.cart.items = this.cart.items.filter(item => item.product.productId != id);
    this.setCartToLocalStorage();
  }

  clearCartService() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  getCart(): Cart {
    return this.cartSubject.value;
  }

  private setCartToLocalStorage(): void {
    this.cart.subtotal = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('cart-ls', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('cart-ls');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }

}
