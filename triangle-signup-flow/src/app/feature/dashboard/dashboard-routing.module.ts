import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { TileViewComponent } from 'src/app/shared/components/tile-view/tile-view.component';


const routes: Routes = [{
  path:'',
  component:DashboardPageComponent,
  children:[{
    path:'user',
    component:TileViewComponent
  },{
    path:'',
    redirectTo:'user',
    pathMatch:'full'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
