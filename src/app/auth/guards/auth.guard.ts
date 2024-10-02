import {Injectable} from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanMatch,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import {map, Observable, tap} from "rxjs";
import {AuthService} from "@core/services";
import {INTERNAL_ROUTES} from "@data/routes/internal.const";


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanMatch, CanActivate {


  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  private checkAuthStatus(): boolean | Observable<boolean> {

    return this.authService.checkAuthentication()
      .pipe(
        tap(isAuthenticated => console.log('Authenticated:', isAuthenticated)),
        map(isAuthenticated => {
          if (isAuthenticated) {
            return true; // Permite el acceso a la ruta
          } else {
            this.router.navigate([INTERNAL_ROUTES.MODULE_AUTH_DEFAULT, INTERNAL_ROUTES.PAGE_AUTH_LOGIN]);
            return false; // Bloquea el acceso a la ruta
          }
        })
      )

  }


  canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
    // console.log('Can Match');
    // console.log({ route, segments })
    return this.checkAuthStatus();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    // console.log('Can Activate');
    // console.log({ route, state })

    return this.checkAuthStatus();
  }

}
