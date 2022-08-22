import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../model/order.model';
import { AuthService } from './auth.service';
import { BearerService } from './bearer.service';

const ORDER_URL = `${environment.BASE_URL}/order`;

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BearerService {

  constructor(
    authService: AuthService,
    http: HttpClient    
  ) {
    super(authService, http);
  }
  
  createOrderService(order: Order): Observable<any> {
    return this.http.post(ORDER_URL, order, { headers: this.getHeaders });
  }

  getMyOrdersService(id: number): Observable<any> {
    return this.http.get(ORDER_URL + "/" + id, { headers: this.getHeaders })
  }
 
}
