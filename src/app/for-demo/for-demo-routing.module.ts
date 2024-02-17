import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForDemoComponent } from './for-demo.component';

const routes: Routes = [{
    path: '', component: ForDemoComponent,
    children: [
      { path: 'devexpress', loadChildren: () => import('./devexpress/devexpress.module').then(m => m.DevexpressModule) },
      { path: 'basic', loadChildren: () => import('./basic/basic.module').then(m => m.BasicModule) },
      { path: 'devexpress-component-control', loadChildren: () => import('./devexpress-component-control/devexpress-component-control.module').then(m => m.DevexpressComponentControlModule) },
      { path: 'form-layout-customization', loadChildren: () => import('./form-customization/form-customization.module').then(m => m.FormCustomizationModule) },
      { path: 'js-array', loadChildren: () => import('./js-array/js-array.module').then(m => m.JsArrayModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForDemoRoutingModule { }