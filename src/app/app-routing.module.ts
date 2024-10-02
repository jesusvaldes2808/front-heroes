import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Error404PageComponent} from './shared/pages/error404-page/error404-page.component';
import {AuthGuard} from "@core/guards/auth.guard";
import {PublicGuard} from "@core/guards/public.guard";
import {INTERNAL_ROUTES} from "@data/routes/internal.const";



const routes: Routes = [
  {
    path: INTERNAL_ROUTES.MODULE_AUTH_DEFAULT,
    loadChildren: () => import ('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [PublicGuard],
    canMatch: [PublicGuard]
  },
  {
    path: INTERNAL_ROUTES.MODULE_HEROS_DEFAULT,
    loadChildren: () => import ('./heroes/heroes.module').then(m => m.HeroesModule),
    canActivate: [AuthGuard],
    canMatch: [AuthGuard]
  },
  {
    path: '',
    redirectTo: INTERNAL_ROUTES.MODULE_HEROS_DEFAULT,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: Error404PageComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
