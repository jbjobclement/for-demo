import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'for-demo', loadChildren: () => import('./for-demo/for-demo.module').then(m => m.ForDemoModule)
  },
  {
    path: 'for-prac', loadChildren: () => import('./for-prac/for-prac.module').then(m => m.ForPracModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
