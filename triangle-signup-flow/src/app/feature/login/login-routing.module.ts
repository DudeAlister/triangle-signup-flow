import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAccessComponent } from './create-access/create-access.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [{
    path: '',
    component: LoginComponent
}, {
    path: 'create',
    component: CreateAccessComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
