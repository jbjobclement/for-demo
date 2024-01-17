import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevPracRoutingModule } from './dev-prac-routing.module';
import { DxSelectBoxModule, DxTextBoxModule } from 'devextreme-angular';
import { DevExtremeModule } from 'devextreme-angular';
import { DevPracComponent } from './dev-prac.component';
import { FormsModule } from '@angular/forms';
import { AlertParaDirective } from 'src/app/shared/directives/alert-para/alert-para.directive';

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
    FormsModule,
    AlertParaDirective
  ]
})
export class DevPracModule { }
