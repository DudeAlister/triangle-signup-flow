import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { TileViewComponent } from 'src/app/shared/components/tile-view/tile-view.component';
import { PageNotFoundComponent } from 'src/app/shared/components/page-not-found/page-not-found.component';


const routes: Routes = [{
  //dashboard page
  path:'',
  component:DashboardPageComponent,
  children:[{
    path:'user',
    component:TileViewComponent
  },{
    path:'',
    redirectTo:'user',
    pathMatch:'full'
  },{
    //404 page
      path:'**',
      component:PageNotFoundComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
