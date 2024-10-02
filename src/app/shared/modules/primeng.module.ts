import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { GalleriaModule } from 'primeng/galleria';
import {AnimateModule} from "primeng/animate";

@NgModule({
  declarations: [],
  exports: [
    AutoCompleteModule,
    GalleriaModule,
    AnimateModule
  ],
  imports: [
    CommonModule,
    GalleriaModule,
    AnimateModule
  ]
})
export class PrimengModule { }
