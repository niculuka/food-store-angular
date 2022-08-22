import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product.model';
import { AuthService } from './auth.service';
import { BearerService } from './bearer.service';

const ADMIN_URL = `${environment.BASE_URL}/admin/products`;

@Injectable({
  providedIn: 'root'
})
export class AdminProductService extends BearerService {

  constructor(
    authService: AuthService,
    http: HttpClient
  ) {
    super(authService, http);
  }

  getAllProductsService(): Observable<any> {
    return this.http.get(ADMIN_URL, { headers: this.getHeaders })
  }

  // getProductByIdService(product: Product): Observable<any> {
  //   return this.http.get(`${ADMIN_URL}/${product.productId}`, { headers: this.getHeaders })
  // }

  createProductService(product: Product): Observable<any> {
    return this.http.post(ADMIN_URL, product, { headers: this.getHeaders });
  }

  updateProductService(product: Product): Observable<any> {
    return this.http.put(ADMIN_URL, product, { headers: this.getHeaders });
  }


  deleteProductService(product: Product): Observable<any> {
    return this.http.delete(`${ADMIN_URL}/${product.productId}`, { headers: this.getHeaders });
  }
}
