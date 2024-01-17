import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicRoutingModule } from './basic-routing.module';
import { GreenTitleDirective}  from 'src/app/shared/directives/green-title/green-title.directive';
import { DirectiveWithServicePracticeDirective } from 'src/app/shared/directive-with-service-practice/directive-with-service-practice.directive';



@NgModule({
  declarations: [
    GreenTitleDirective,
    DirectiveWithServicePracticeDirective,
  ],
  imports: [
    CommonModule,
    BasicRoutingModule,

  ]
})
export class BasicModule { }
