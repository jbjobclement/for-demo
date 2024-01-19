import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevexpressComponentControlRoutingModule } from './devexpress-component-control-routing.module';
import { DevexpressComponentControlComponent } from './devexpress-component-control.component';


@NgModule({
  declarations: [
    DevexpressComponentControlComponent
  ],
  imports: [
    CommonModule,
    DevexpressComponentControlRoutingModule
  ]
})
export class DevexpressComponentControlModule { }
