import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';
import { AuthService } from './auth.service';
import { BearerService } from './bearer.service';

const API_URL = `${environment.BASE_URL}/admin`;

@Injectable({
  providedIn: 'root'
})
export class AdminUserService extends BearerService {

  constructor(
    authService: AuthService,
    http: HttpClient
  ) {
    super(authService, http);
  }

  findAllUsersService(): Observable<any> {
    return this.http.get(API_URL + "/users", { headers: this.getHeaders })
  }

  findUserByIdService(id: number): Observable<any> {
    return this.http.get(API_URL + "/users/" + id, { headers: this.getHeaders })
  }

  changeRoleService(username: string, role: string): Observable<any> {
    return this.http.put(API_URL + "/change/" + role, username, { headers: this.getHeaders });
  }

  changeEnabledService(id: any, enabled: boolean): Observable<any>  {
    return this.http.put(API_URL + "/replace/" + enabled, id, { headers: this.getHeaders });
  }

  deleteUserService(user: User): Observable<any> {
    return this.http.delete(`${API_URL}/users/${user.userId}`, { headers: this.getHeaders });
  }

}
