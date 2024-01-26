import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormCustomizationRoutingModule } from './form-customization-routing.module';
import { FormCustomizationComponent } from './form-customization.component';
import { DxFormModule, DxTabsModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    FormCustomizationComponent
  ],
  imports: [
    CommonModule,
    FormCustomizationRoutingModule,
    DxFormModule,
    DxTabsModule,
    // cust
  ]
})
export class FormCustomizationModule { }
