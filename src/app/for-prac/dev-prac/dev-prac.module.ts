import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevPracRoutingModule } from './dev-prac-routing.module';
import { DxSelectBoxModule, DxTextBoxModule } from 'devextreme-angular';
import { DevExtremeModule } from 'devextreme-angular';
import { DevPracComponent } from './dev-prac.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DevPracComponent
  ],
  imports: [
    CommonModule,
    DevPracRoutingModule,
    DxSelectBoxModule,
    DevExtremeModule,
    DxTextBoxModule,
    FormsModule
  ]
})
export class DevPracModule { }
