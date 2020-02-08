import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 

const routes: Routes = [{
  path: 'login',
  loadChildren: () => import('./feature/login/login.module').then(m => m.LoginModule)
}, {
  path: 'dashboard',
  loadChildren: () => import('./feature/dashboard/dashboard.module').then(m => m.DashboardModule)
},{
  path:'',
  redirectTo:'/login',
  pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
