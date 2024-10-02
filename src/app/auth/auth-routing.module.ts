import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from '../shared/pages/layout-page/layout-page.component';
import { LoginPageComponent } from '../shared/pages/login-page/login-page.component';
import { RegisterPageComponent } from '../shared/pages/register-page/register-page.component';
import {INTERNAL_ROUTES} from "@data/routes/internal.const";

const routes: Routes = [
  {
    path:'', component: LayoutPageComponent,
    children:[
      {
        path: INTERNAL_ROUTES.PAGE_AUTH_LOGIN,
        component: LoginPageComponent
      },
      {
        path: INTERNAL_ROUTES.PAGE_AUTH_NEW_ACCOUNT,
        component: RegisterPageComponent
      },
      {
        path:'**',
        redirectTo: INTERNAL_ROUTES.PAGE_AUTH_LOGIN
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
