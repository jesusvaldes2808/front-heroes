import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest
} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {AuthService} from "@core/services";
import {Router} from "@angular/router";
import {catchError, Observable, throwError} from "rxjs";
import {INTERNAL_ROUTES} from "@data/routes/internal.const";

export const tokenInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};

@Injectable()
export class TokenInterceptor implements HttpInterceptor {


  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.userToken;

    let modifiedReq = req;
    if (token) {
      modifiedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(modifiedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 || error.status === 403) {
          this.authService.logOut();
          this.router.navigate([INTERNAL_ROUTES.MODULE_AUTH_DEFAULT, INTERNAL_ROUTES.PAGE_AUTH_LOGIN]);
        }
        return throwError(() => error);
      })
    );

  }

}
