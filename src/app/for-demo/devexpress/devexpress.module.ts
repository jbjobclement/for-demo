import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevexpressRoutingModule } from './devexpress-routing.module';
import { DevexpressComponent } from './devexpress.component';
import { DxDataGridModule, DxTextBoxModule } from 'devextreme-angular';
import { DxTextBoxDirective } from 'src/app/shared/directives/for-demo/dx-text-box.directive';


@NgModule({
  declarations: [
    DevexpressComponent
  ],
  imports: [
    CommonModule,
    DevexpressRoutingModule,
    DxTextBoxModule,
    DxTextBoxDirective,
    DxDataGridModule
  ]
})
export class DevexpressModule { }
