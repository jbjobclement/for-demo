import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForTestComponent } from './basic.component';

const routes: Routes = [{ path: '', component: ForTestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForTestRoutingModule { }
