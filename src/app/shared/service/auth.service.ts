import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../model/iuser.model';
import { User } from '../model/user.model';

const API_URL = `${environment.BASE_URL}/auth`

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // CURRENT USER ============================================================================================
  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;

  constructor(
    private http: HttpClient,
    private toastrService: ToastrService
  ) {
    let storageUser;
    const storageUserAsStr = localStorage.getItem("currentUser-ls");
    if (storageUserAsStr) {
      storageUser = JSON.parse(storageUserAsStr);
    }

    this.currentUserSubject = new BehaviorSubject<User>(storageUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  // REGISTER ================================================================================================
  registerService(user: User): Observable<any> {
    return this.http.post(API_URL + "/register", user);
  }

  // LOGIN ===================================================================================================
  loginService(user: IUser): Observable<any> {
    return this.http.post<any>(API_URL + "/login", user).pipe(tap({
          next: data => {
            if (data) {
              this.setSessionUser(data);
              this.toastrService.success(`Welcome ${data.name}!`, 'Login Successful');
            }
          },
          error: (err) => {
            this.toastrService.error(err.error, 'Login Failed');
          }
        })
      )
  }

  setSessionUser(user: User) {
    localStorage.setItem('currentUser-ls', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  // LOGOUT ==================================================================================================
  logoutService() {
    localStorage.clear();
    this.currentUserSubject.next(new User);
  }

}
