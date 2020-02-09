import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms'

import {CreateAccessComponent} from './create-access/create-access.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignupRoutingModule } from './signuo-routing.module';



@NgModule({
  declarations: [CreateAccessComponent],
  imports: [
    CommonModule,
    SharedModule,
    SignupRoutingModule,
    ReactiveFormsModule
  ]
})
export class SignupModule { }
