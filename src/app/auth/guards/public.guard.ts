import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanMatch,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment
} from '@angular/router';
import {Injectable} from "@angular/core";
import {AuthService} from "@core/services";
import {map, Observable, tap} from "rxjs";
import {INTERNAL_ROUTES} from "@data/routes/internal.const";


@Injectable({providedIn: 'root'})
export class PublicGuard implements CanMatch, CanActivate {


  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  private checkAuthStatus(): boolean | Observable<boolean> {

    return this.authService.checkAuthentication()
      .pipe(
        tap( isAuthenticated => console.log('Authenticated:', isAuthenticated ) ),
        tap( isAuthenticated => {
          if ( isAuthenticated ) {
            this.router.navigate([INTERNAL_ROUTES.MODULE_HEROS_DEFAULT])

          }

        }),
        map( isAuthenticated => !isAuthenticated )
      )

  }


  canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {

    return this.checkAuthStatus();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {

    return this.checkAuthStatus();
  }

}
