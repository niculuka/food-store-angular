import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';
import { AuthService } from './auth.service';
import { BearerService } from './bearer.service';

const API_URL = `${environment.BASE_URL}`;

@Injectable({
  providedIn: 'root'
})
export class UserService extends BearerService {

  constructor(
    authService: AuthService,
    http: HttpClient
  ) {
    super(authService, http);
  }

  updatePasswordService(user: User): Observable<any> {
    return this.http.put(API_URL + "/password", user, { headers: this.getHeaders });
  }

  updateProfileService(user: User): Observable<any> {
    return this.http.put(API_URL + "/profile", user, { headers: this.getHeaders });
  }

  deleteUserProfileService(user: User): Observable<any> {
    return this.http.delete(API_URL + "/profile/" + user.userId, { headers: this.getHeaders });
  }

  
}
