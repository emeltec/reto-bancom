import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LOCAL_DATA } from 'src/app/config/options';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  formLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private message: MessagesService,
  ) { 
    this.formLogin = fb.group({
      username: [''],
      password: ['']
    })
  }

  ngOnInit() {
  }

  login() {
    const formValue = this.formLogin.value;

    if(formValue.username == '' || formValue.password == '') {
      this.message.showMessageError('El correo electrónico y contraseña son obligatorios', '');
      return;
    }

    if(!this.validEmail.test(formValue.username)) {
      this.message.showMessageError('El correo electrónico debe ser válido', '');
      return;
    }

    this.router.navigate(['/users']);

    this.saveDataUser();
  }

  saveDataUser() {
    localStorage.setItem(LOCAL_DATA.USERDATA, JSON.stringify(this.formLogin.value));
  }

}
