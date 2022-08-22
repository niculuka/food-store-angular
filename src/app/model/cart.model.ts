import { CartItem } from "./cart-item.model";

export class Cart {

  items: CartItem[] = [];
  
  totalCount: number = 0;
  subtotal: number = 0;
  
}
