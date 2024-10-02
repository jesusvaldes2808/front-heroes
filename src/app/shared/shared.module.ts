import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {Error404PageComponent} from './pages/error404-page/error404-page.component';
import {BannerComponent} from './pages/banner/banner.component';
import {PrimengModule} from "./modules/primeng.module";


@NgModule({
  declarations: [
    Error404PageComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    Error404PageComponent,
    BannerComponent,

  ]
})
export class SharedModule {
}
