import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForDemoRoutingModule } from './for-demo-routing.module';
import { ForDemoComponent } from './for-demo.component';


@NgModule({
  declarations: [
    ForDemoComponent
  ],
  imports: [
    CommonModule,
    ForDemoRoutingModule
  ]
})
export class ForDemoModule { }
