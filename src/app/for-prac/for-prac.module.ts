import { ForPracComponent } from './for-prac.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForPracRoutingModule } from './for-prac-routing.module';


@NgModule({
  declarations: [
    ForPracComponent,
  ],
  imports: [
    CommonModule,
    ForPracRoutingModule,
  ]
})
export class ForPracModule { }
