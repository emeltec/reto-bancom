import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from 'src/app/services/users.service';
import { PostService } from 'src/app/services/post.service';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [UsersComponent, DialogComponent],
  providers: [UsersService, PostService]
})
export class UsersModule { }
