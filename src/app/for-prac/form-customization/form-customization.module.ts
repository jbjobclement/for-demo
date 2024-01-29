import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCustomizationComponent } from './form-customization.component';
import { DxFormModule, DxTabsModule } from 'devextreme-angular';
import { FormCustomizatinoRoutingModule } from './form-customization-routing.module';



@NgModule({
  declarations: [FormCustomizationComponent],
  imports: [
    FormCustomizatinoRoutingModule,
    CommonModule,
    DxFormModule,
    DxTabsModule

  ]
})
export class FormCustomizationModule { }
