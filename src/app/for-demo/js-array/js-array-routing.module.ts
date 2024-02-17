import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsArrayComponent } from './js-array.component';

const routes: Routes = [{ path: '', component: JsArrayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsArrayRoutingModule { }
