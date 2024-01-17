import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevPracComponent } from './dev-prac.component';

const routes: Routes = [{ path: '', component: DevPracComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevPracRoutingModule { }
