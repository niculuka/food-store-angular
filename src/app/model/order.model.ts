import { DELIVERY, PICK_UP } from "../constants/const";
import { CartItem } from "./cart-item.model";
import { OrderStatus } from "./order-status.enum";
import { PaymentType } from "./payment-type.enum";

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
