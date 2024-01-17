import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRoutingModule } from './basic-routing.module';
import { BasicComponent } from './basic.component';
import { HeaderModifierDirective } from 'src/app/shared/directives/header-modifier/header-modifier.directive';
import { DirectiveWithServiceDirective } from 'src/app/shared/directives/directive-with-service/directive-with-service.directive';


@NgModule({
  declarations: [
    BasicComponent
  ],
  imports: [
    CommonModule,
    BasicRoutingModule,
    HeaderModifierDirective,
    DirectiveWithServiceDirective
  ]
})
export class BasicModule { }
