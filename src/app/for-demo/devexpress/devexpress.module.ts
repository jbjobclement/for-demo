import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevexpressRoutingModule } from './devexpress-routing.module';
import { DevexpressComponent } from './devexpress.component';


@NgModule({
  declarations: [
    DevexpressComponent
  ],
  imports: [
    CommonModule,
    DevexpressRoutingModule
  ]
})
export class DevexpressModule { }
