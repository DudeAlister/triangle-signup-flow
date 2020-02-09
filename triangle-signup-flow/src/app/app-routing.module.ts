import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardAuthGuard } from './shared/auth/dash-auth.gaurd';
import { LoginAuthGuard } from './shared/auth/login-auth.gaurd';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

 //laszy loading

const routes: Routes = [{
  path: 'login',
  canActivate:[LoginAuthGuard],
  loadChildren: () => import('./feature/login/login.module').then(m => m.LoginModule)
}, {
  path: 'dashboard',
  canActivate:[DashBoardAuthGuard],
  loadChildren: () => import('./feature/dashboard/dashboard.module').then(m => m.DashboardModule)
},{
  path:'sign-up',
  canActivate:[LoginAuthGuard],
  loadChildren: () =>import('./feature/signup/signup.module').then(m => m.SignupModule)
},{
  path:'',
  redirectTo:'/sign-up',
  pathMatch:'full'
},{
  path:'**',
  component:PageNotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
