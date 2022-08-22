import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../model/order.model';
import { AuthService } from './auth.service';
import { BearerService } from './bearer.service';

const ORDER_URL = `${environment.BASE_URL}/admin`;

@Injectable({
  providedIn: 'root'
})
export class AdminOrderService extends BearerService{

  constructor(
    authService: AuthService,
    http: HttpClient   
  ) {
    super(authService, http);
  }
  
  getAllOrdersService(): Observable<any> {
    return this.http.get(ORDER_URL + "/orders", { headers: this.getHeaders })
  }

  updateStatusService(orderId: number, status: string): Observable<any> {
    return this.http.put(ORDER_URL + "/status/" + status, orderId, { headers: this.getHeaders });
  }

  deleteOrderService(order: Order): Observable<any> {
    return this.http.delete(ORDER_URL + "/orders/" + order.orderId, { headers: this.getHeaders });
  }

}
