import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicRoutingModule } from './basic-routing.module';
import { GreenTitleDirective } from 'src/app/shared/directives/green-title/green-title.directive';
import { DirectiveWithServicePracticeDirective } from 'src/app/shared/directive-with-service-practice/directive-with-service-practice.directive';
import { AlertParaDirective } from 'src/app/shared/directives/alert-para/alert-para.directive';
import { BasicComponent } from './basic.component';



@NgModule({
  declarations: [
    BasicComponent
  ],
  imports: [
    CommonModule,
    BasicRoutingModule,
    GreenTitleDirective,
    DirectiveWithServicePracticeDirective,
    AlertParaDirective,

  ]
})
export class BasicModule { }
