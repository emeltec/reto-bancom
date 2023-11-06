import { Injectable } from '@angular/core';
import { LOCAL_DATA } from '../config/options';
import { IUserSession } from '../interfaces/user-session';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLogin(): boolean {
    const token:IUserSession = JSON.parse(localStorage.getItem(LOCAL_DATA.USERDATA) || '{}');

    if (token && (token.username == null || token.username == '')) {
      return false;
    } else {
      return true;
    }
  }

}
