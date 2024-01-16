import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForDemoRoutingModule } from './for-demo-routing.module';
import { ForDemoComponent } from './for-demo.component';
import { HeaderModifierDirective } from '../shared/directives/header-modifier.directive';


@NgModule({
  declarations: [
    ForDemoComponent
  ],
  imports: [
    CommonModule,
    ForDemoRoutingModule,
    HeaderModifierDirective
  ]
})
export class ForDemoModule { }
