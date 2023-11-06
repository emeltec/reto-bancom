import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let formBuilder: FormBuilder;
  let router: Router;
  let messagesService: MessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [FormBuilder, Router, MessagesService],
    }).compileComponents();

    formBuilder = TestBed.inject(FormBuilder);
    router = TestBed.inject(Router);
    messagesService = TestBed.inject(MessagesService);

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia mosntrar un mensage cuando username y password estan vacias', () => {
    spyOn(messagesService, 'showMessageError');
    component.login();
    expect(messagesService.showMessageError).toHaveBeenCalledWith(
      'El correo electrónico y contraseña son obligatorios',
      ''
    );
  });

  it('deberia mostrar un mensage si el correo es invalido', () => {
    spyOn(messagesService, 'showMessageError');
    component.formLogin.patchValue({
      username: 'invalidemail',
      password: 'password123',
    });
    component.login();
    expect(messagesService.showMessageError).toHaveBeenCalledWith(
      'El correo electrónico debe ser válido',
      ''
    );
  });

  it('deberia navegar al /users si el correo el valido', () => {
    spyOn(router, 'navigate');
    spyOn(localStorage, 'setItem');
    component.formLogin.patchValue({
      username: 'validemail@example.com',
      password: 'password123',
    });
    component.login();
    expect(router.navigate).toHaveBeenCalledWith(['/users']);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'USERDATA',
      JSON.stringify({
        username: 'validemail@example.com',
        password: 'password123',
      })
    );
  });
});