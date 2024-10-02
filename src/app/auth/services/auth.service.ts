import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject, catchError, map, Observable, of, tap, throwError, timer} from 'rxjs';

import { JwtHelperService } from "@auth0/angular-jwt";
import {LoginRequest, User} from "@data/index";
import {AUTH} from "@data/routes/http.const";
import {jwtDecode} from "jwt-decode";
import {INTERNAL_ROUTES} from "@data/routes/internal.const";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private jwtHelper: JwtHelperService = new JwtHelperService();


  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) {

    this.currentUserLoginOn = new BehaviorSubject<boolean>(sessionStorage.getItem("token") != null);
    this.currentUserData = new BehaviorSubject<string>(sessionStorage.getItem("token") || "");


  }

  loginIn(credentials: LoginRequest): Observable<any> {

    return this._http.post<any>(`${AUTH.POST_LOGIN_USER}`, credentials)
      .pipe(
        tap((userData) => {
          sessionStorage.setItem("token", userData.token);
          this.currentUserData.next(userData.token);
          this.currentUserLoginOn.next(true);
        }),
        map((userData) => userData.token),
        catchError(this.handleErro)
      )
  }

  logOut(): void {

    sessionStorage.removeItem("token");
    this.currentUserLoginOn.next(false);
    this.currentUserData.next("");
  }

  registerUser(user: User): Observable<User> {

    return this._http.post<User>(`${AUTH.POST_REGISTER_USER}`, user)
      .pipe(
        catchError(this.handleErro)
      )

  }


  private handleErro(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Se ha producio un error ', error.error);
    } else {
      console.error('Backend retornó el código de estado ', error);
    }
    return throwError(() => new Error('Algo falló. Por favor intente nuevamente.'));
  }

  get userData(): Observable<string> {
    return this.currentUserData.asObservable();
  }

  get userLoginOn(): Observable<boolean> {
    return this.currentUserLoginOn.asObservable();
  }

  get userToken(): string {
    return this.currentUserData.value;
  }


  checkAuthentication(): Observable<boolean> {


    const token = sessionStorage.getItem('token');

    if (!token) {
      this.currentUserLoginOn.next(false);
      return of(false);
    }

    const isExpired = this.isTokenExpired(token);

    if (isExpired) {
      this.logOut();
    }

    this.currentUserLoginOn.next(!isExpired);
    return of(!isExpired);

  }

  public isTokenExpired(token: string): boolean {

    try {
      const decodedToken: any = jwtDecode(token);
      const expiry = decodedToken.exp * 1000;
      return Date.now() >= expiry;
    }
    catch (error) {

      return true;
    }
  }




}
