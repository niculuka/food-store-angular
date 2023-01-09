import { DELIVERY } from "../constants/const";
import { OrderStatus, PaymentType } from "../enums/food.enum";
import { CartItem } from "./cart-item.model";


export class Order {
  orderId!: number;
  items!: CartItem[];

  subtotal!: number;
  favoriteDelivery: number = DELIVERY;
  totalPrice!: number;

  paymentType: string = PaymentType.CASH;

  createdAt!: string;
  status: string = OrderStatus.NEW;

  userIdGet!: number;
  nameGet!: string;
  emailGet!: string;
  addressGet!: string;  
  phoneGet!: string;

}
