import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForDemoComponent } from './for-demo.component';

const routes: Routes = [{ path: '', component: ForDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForDemoRoutingModule { }
