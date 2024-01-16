import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForPracComponent } from './for-prac.component';

const routes: Routes = [{ path: '', component: ForPracComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForPracRoutingModule { }
