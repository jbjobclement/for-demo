import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevControllComponent } from './dev-controll.component';

import { DevControllRoutingModule } from './dev-controll-routing.module';
import { DxTextBoxModule, DxButtonModule, DxDataGridModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    DevControllComponent,
  ],
  imports: [
    CommonModule,
    DevControllRoutingModule,
    DxTextBoxModule,
    DxButtonModule,
    DxDataGridModule
  ]
})
export class DevControllModule { }
