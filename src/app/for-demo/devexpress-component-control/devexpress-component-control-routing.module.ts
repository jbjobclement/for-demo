import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevexpressComponentControlComponent } from './devexpress-component-control.component';

const routes: Routes = [{ path: '', component: DevexpressComponentControlComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevexpressComponentControlRoutingModule { }
