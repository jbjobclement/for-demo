import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevexpressComponentControlRoutingModule } from './devexpress-component-control-routing.module';
import { DevexpressComponentControlComponent } from './devexpress-component-control.component';
import { DxButtonModule, DxPopupModule, DxTextBoxModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    DevexpressComponentControlComponent
  ],
  imports: [
    CommonModule,
    DevexpressComponentControlRoutingModule,
    DxTextBoxModule,
    DxButtonModule
  ]
})
export class DevexpressComponentControlModule { }
