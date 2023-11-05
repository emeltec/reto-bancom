import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { AngularMaterialModule } from '../../shared/angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    AngularMaterialModule,
  ],
  declarations: [UsersComponent]
})
export class UsersModule { }
