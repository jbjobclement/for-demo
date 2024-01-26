import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormCustomizationRoutingModule } from './form-customization-routing.module';
import { FormCustomizationComponent } from './form-customization.component';


@NgModule({
  declarations: [
    FormCustomizationComponent
  ],
  imports: [
    CommonModule,
    FormCustomizationRoutingModule
  ]
})
export class FormCustomizationModule { }
