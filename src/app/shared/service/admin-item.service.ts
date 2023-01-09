import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CartItem } from '../model/cart-item.model';
import { AuthService } from './auth.service';
import { BearerService } from './bearer.service';

const ITEM_URL = `${environment.BASE_URL}/admin`;

@Injectable({
  providedIn: 'root'
})
export class AdminItemService extends BearerService {

  constructor(
    authService: AuthService,
    http: HttpClient  
  ) {
    super(authService, http);
  }

  getAllOrdersService(): Observable<any> {
    return this.http.get(ITEM_URL + "/items", { headers: this.getHeaders })
  }

  deleteItemService(item: CartItem): Observable<any> {
    return this.http.delete(ITEM_URL + "/items/" + item.itemId, { headers: this.getHeaders });
  }

}
