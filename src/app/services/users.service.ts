import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserResponse } from '../interfaces/user';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(
    private http: HttpClient,
  ) { }

  getUsers() {
    return this.http.get<IUserResponse[]>(this.apiUrl).pipe(
      map(users => this.userDapter(users))
    );
  }


  userDapter(users: IUserResponse[]) {
    return users.map(user => {
      return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        posts: []
      }
    })
  }

}
