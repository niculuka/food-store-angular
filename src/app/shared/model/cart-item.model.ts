import { Product } from "./product.model";

export class CartItem {

  constructor(public product: Product) { }

  itemId: number | undefined;
  productName: string = this.product.name;
  quantity: number = 1;
  price: number = this.product.price;
  orderIdFk: number | undefined;

}
