import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsArrayRoutingModule } from './js-array-routing.module';
import { JsArrayComponent } from './js-array.component';


@NgModule({
  declarations: [
    JsArrayComponent
  ],
  imports: [
    CommonModule,
    JsArrayRoutingModule,
  ]
})
export class JsArrayModule { }
