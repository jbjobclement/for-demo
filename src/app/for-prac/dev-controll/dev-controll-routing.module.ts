import { DevControllModule } from './dev-controll.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevControllComponent } from './dev-controll.component';

const routes: Routes = [
  { path: '', component: DevControllComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevControllRoutingModule { }
