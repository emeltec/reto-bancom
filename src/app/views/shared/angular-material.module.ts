import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
  ],
  exports: [
    MatIconModule,
    MatTableModule,
    MatDialogModule,
  ]
})
export class AngularMaterialModule { }
