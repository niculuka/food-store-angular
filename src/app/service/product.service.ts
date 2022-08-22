import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product.model';
import { AuthService } from './auth.service';
import { BearerService } from './bearer.service';

const API_URL = `${environment.BASE_URL}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BearerService {

  constructor(
    authService: AuthService,
    http: HttpClient
  ) {
    super(authService, http);
  }

  getProductsByCategoryService(category: String): Observable<any> {
    return this.http.get<Product>(API_URL + "/products/" + category);
  }  

  getProductByNameService(linkName: string): Observable<any> {
    return this.http.get<Product>(API_URL + "/product/" + linkName);
  }
  
}


