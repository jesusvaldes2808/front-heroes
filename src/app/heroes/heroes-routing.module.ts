import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HeroePageComponent } from './pages/heroe-page/heroe-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import {INTERNAL_ROUTES} from "@data/routes/internal.const";
import {Error404PageComponent} from "../shared/pages/error404-page/error404-page.component";

const routes: Routes = [
  {
    path:'', component: LayoutPageComponent,
    children:[

      {
        path: INTERNAL_ROUTES.PAGE_HERO_NEW_HERO,
        component: NewPageComponent
      },
      {
        path: INTERNAL_ROUTES.PAGE_SEARCH_HERO,
        component: SearchPageComponent
      },
      {
        path: INTERNAL_ROUTES.PAGE_HERO_EDIT,
        component: NewPageComponent
      },
      {
        path: INTERNAL_ROUTES.PAGE_HERO_LIST,
        component: ListPageComponent
      },
      {
        path: INTERNAL_ROUTES.PAGE_HERO_ID ,
        component: HeroePageComponent
      },
      {
        path:'',
        redirectTo: INTERNAL_ROUTES.PAGE_HERO_LIST,
        pathMatch:'full'
      },
      {
        path: '**',
        component: Error404PageComponent,
      }


    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
