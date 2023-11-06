/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsersService } from './users.service';
import { IUserResponse } from '../interfaces/user';

describe('Service: Users', () => {
  let service: UsersService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService]
    });
    service = TestBed.inject(UsersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should ...', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));

  it('Deberia traer lista de usuarios', () => {
    const mockUsers: IUserResponse[] = [];

    service.getUsers().subscribe((users) => {
      expect(users.length).toBe(2);
      expect(users[0].name).toBe('User 1');
      expect(users[1].name).toBe('User 2');
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });

  it('Deberia adaptar la lista de usuarios', () => {
    const mockUsers: IUserResponse[] = [];

    const adaptedUsers = service.userDapter(mockUsers);

    expect(adaptedUsers.length).toBe(1);
    expect(adaptedUsers[0].id).toBe(1);
    expect(adaptedUsers[0].name).toBe('User 1');
    expect(adaptedUsers[0].username).toBe('user1');
    expect(adaptedUsers[0].email).toBe('user1@example.com');
    expect(adaptedUsers[0].phone).toBe('123-456-7890');
    expect(adaptedUsers[0].posts.length).toBe(0);
  });
});
