import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../shared/angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    AngularMaterialModule,
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
