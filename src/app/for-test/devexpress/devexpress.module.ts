import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevexpressRoutingModule } from './devexpress-routing.module';
import { DevexpressComponent } from './devexpress.component';
import { DxTextBoxDirective } from 'src/app/shared/directives/for-test/dx-text-box.directive';
import { TextBoxTemplateComponent } from 'src/app/shared/components/for-test/text-box-template/text-box-template.component';
import { DxDataGridModule, DxTextBoxModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    DevexpressComponent,
  ],
  imports: [
    CommonModule,
    DevexpressRoutingModule,
    DxTextBoxDirective,
    TextBoxTemplateComponent,
    DxDataGridModule,
    DxTextBoxModule
  ]
})
export class DevexpressModule { }
