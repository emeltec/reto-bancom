import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IPost } from 'src/app/interfaces/post';
import { MessagesService } from 'src/app/services/messages.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {

  formPost: FormGroup;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private message: MessagesService,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 
    this.formPost = fb.group({
      title: [''],
      description: ['']
    })
  }

  ngOnInit() {
  }

  savePost() {
    const formValue = this.formPost.value;

    if(formValue.title == '' || formValue.description == '') {
      this.message.showMessageError('El título y la descripción son obligatorios', '');
      return;
    }

    const newPost:IPost = {
      id: Math.random(),
      title: formValue.title,
      description: formValue.description,
    }

    this.postService.dataPosts$.next(newPost);
    this.close();
  }


  close(){
    this.formPost.controls['title'].setValue('');
    this.formPost.controls['description'].setValue('');
    this.dialogRef.close();
  }

}
