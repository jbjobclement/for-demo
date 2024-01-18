import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevPracRoutingModule } from './dev-prac-routing.module';
import { DxSelectBoxModule, DxTextBoxModule } from 'devextreme-angular';
import { DevExtremeModule } from 'devextreme-angular';
import { DevPracComponent } from './dev-prac.component';
import { FormsModule } from '@angular/forms';
import { AlertParaDirective } from 'src/app/shared/directives/alert-para/alert-para.directive';
import { DevTextComponent } from './dev-text/dev-text.component';
import { DxTemplateModule } from 'devextreme-angular';
import { DevDirectiveDirective } from 'src/app/shared/directives/dev-directive/dev-directive.directive';


@NgModule({
  declarations: [
    DevPracComponent,
    DevTextComponent,
  ],
  imports: [
    CommonModule,
    DxTemplateModule,
    DevPracRoutingModule,
    DxSelectBoxModule,
    DevExtremeModule,
    DxTextBoxModule,
    FormsModule,
    AlertParaDirective,
    DevDirectiveDirective
  ]
})
export class DevPracModule { }
