import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAccessComponent } from './create-access/create-access.component';




const routes: Routes = [ {
    path: '',
    component: CreateAccessComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SignupRoutingModule { }
