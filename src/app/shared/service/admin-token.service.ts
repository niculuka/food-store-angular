import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Token } from '../model/token.model';
import { AuthService } from './auth.service';
import { BearerService } from './bearer.service';

const TOKEN_URL = `${environment.BASE_URL}/admin`;

@Injectable({
  providedIn: 'root'
})
export class AdminTokenService extends BearerService{

  constructor(
    authService: AuthService,
    http: HttpClient  
  ) {
    super(authService, http);
  }

  getAllTokensService(): Observable<any> {
    return this.http.get(TOKEN_URL + "/tokens", { headers: this.getHeaders })
  }

  deleteTokenService(token: Token): Observable<any> {
    return this.http.delete(TOKEN_URL + "/tokens/" + token.tokenId, { headers: this.getHeaders });
  }
}
