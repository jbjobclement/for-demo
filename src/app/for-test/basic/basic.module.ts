import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForTestRoutingModule } from './basic-routing.module';
import { ForTestComponent } from './basic.component';
import { BlueHeaderModifierDirective } from '../../shared/directives/blue-title/header-modifier.directive';
import { DirectiveWithServiceDirectiveTest } from '../../shared/directive-with-service-test/directive-with-service-test.directive';
import { BsButton } from '../../shared/directive-with-service-test/directive-with-service-test-btn.directive';


@NgModule({
  declarations: [
    ForTestComponent,
  ],
  imports: [
    CommonModule,
    ForTestRoutingModule,
    BlueHeaderModifierDirective,
    DirectiveWithServiceDirectiveTest,
    BsButton
  ]
})
export class ForTestModule { }
