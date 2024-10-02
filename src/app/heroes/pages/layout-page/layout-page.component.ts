import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from "@core/services";
import {User} from "@data/index";
import {INTERNAL_ROUTES} from "@data/routes/internal.const";

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.scss'
})
export class LayoutPageComponent {

  constructor(
    private _authService: AuthService,
    private _router: Router) {

  }

  public sidebarItems = [
    {
      label: 'listado', icon: 'label', url: `${INTERNAL_ROUTES.PAGE_HERO_LIST}`
    },
    {
      label: 'Añadir', icon: 'add', url: `${INTERNAL_ROUTES.PAGE_HERO_NEW_HERO}`
    }
  ]

  get user(): String | undefined {
    return this._authService.userToken;
  }

  onLogout() {
    this._authService.logOut();
    this._router.navigate([INTERNAL_ROUTES.MODULE_AUTH_DEFAULT, INTERNAL_ROUTES.PAGE_AUTH_LOGIN])
  }


}
