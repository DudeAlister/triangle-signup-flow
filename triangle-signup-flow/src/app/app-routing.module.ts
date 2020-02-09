import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/auth/auth.gaurd';

 

const routes: Routes = [{
  path: 'login',
  loadChildren: () => import('./feature/login/login.module').then(m => m.LoginModule)
}, {
  path: 'dashboard',
  canActivate:[AuthGuard],
  loadChildren: () => import('./feature/dashboard/dashboard.module').then(m => m.DashboardModule)
},{
  path:'sign-up',
  loadChildren: () =>import('./feature/signup/signup.module').then(m => m.SignupModule)
},{
  path:'',
  redirectTo:'/sign-up',
  pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
