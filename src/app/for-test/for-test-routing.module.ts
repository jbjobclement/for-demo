import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForTestComponent } from './for-test.component';

const routes: Routes = [{ 
  path: '', component: ForTestComponent,
  children: [
    {path: 'devexpress', loadChildren: () => import('./devexpress/devexpress.module').then(m => m.DevexpressModule) },
    {path: 'basic', loadChildren: () => import('./basic/basic.module').then(m => m.ForTestModule) },
    {path: 'devexpress-component-control', loadChildren: () => import('./devexpress-component-control/devexpress-component-control.module').then(m => m.DevexpressComponentControlModule) },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForTestRoutingModule { }
