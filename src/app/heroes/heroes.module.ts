import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroePageComponent } from './pages/heroe-page/heroe-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MaterialModule } from '../shared/modules/material.module';
import { CardComponent } from './components/card/card.component';
import { HeroImagePipe} from "@core/pipes/hero-image.pipe";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import {PrimengModule} from "../shared/modules/primeng.module";
import {SharedModule} from "../shared/shared.module";




@NgModule({
  declarations: [
    HeroePageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    CardComponent,

    //pipes
    HeroImagePipe,
      ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeroesRoutingModule,
    MaterialModule,
    PrimengModule,
    FormsModule,
    SharedModule


  ]
})
export class HeroesModule { }
