import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForDemoRoutingModule } from './for-demo-routing.module';
import { ForDemoComponent } from './for-demo.component';
import { HeaderModifierDirective } from '../shared/directives/header-modifier.directive';
import { DirectiveWithServiceDirective } from '../shared/directives/directive-with-service/directive-with-service.directive';


@NgModule({
  declarations: [
    ForDemoComponent
  ],
  imports: [
    CommonModule,
    ForDemoRoutingModule,
    HeaderModifierDirective,
    DirectiveWithServiceDirective
  ]
})
export class ForDemoModule { }
