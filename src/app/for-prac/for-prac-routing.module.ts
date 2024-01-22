import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForPracComponent } from './for-prac.component';

const routes: Routes = [{
  path: '', component: ForPracComponent,
  children: [
    { path: 'devexpress', loadChildren: () => import('./dev-prac/dev-prac.module').then(m => m.DevPracModule) },
    { path: 'basic', loadChildren: () => import('./basic/basic.module').then(m => m.BasicModule) },
    { path: 'dev-controll', loadChildren: () => import('./dev-controll/dev-controll.module').then(m => m.DevControllModule)}
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForPracRoutingModule { }
