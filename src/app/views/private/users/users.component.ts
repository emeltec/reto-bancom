import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { UsersService } from 'src/app/services/users.service';
import { IUser, IUserResponse } from 'src/app/interfaces/user';
import { PostService } from 'src/app/services/post.service';
import { IPost } from 'src/app/interfaces/post';
import { Router } from '@angular/router';
import { IUserSession } from 'src/app/interfaces/user-session';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UsersComponent implements OnInit {
  // dataSource = ELEMENT_DATA;
  public dataSource: IUser[] = [];
  public columnsToDisplay = ['name', 'username', 'email', 'phone'];
  public columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  public expandedElement: IUserResponse[] | null = [];

  private currentUserId = 0;

  public userData: IUserSession = {
    username: '',
    password: ''
  };

  constructor(
    public dialog: MatDialog,
    private userService: UsersService,
    private postService: PostService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.dataSource = users;
    });

    this.postService.dataPosts$.asObservable().subscribe(post => {
      this.addPost(post);
    });

    this.getUserData();
  }

  openDialog(data:any): void {
    this.currentUserId = data.id;

    this.dialog.open(DialogComponent, {
      width: '640px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
      data
    });
  }

  addPost(post:IPost) {
    this.dataSource.find(user => user.id === this.currentUserId)?.posts.push(post);
  }

  logout(){
    this.router.navigate(['/']);
    localStorage.clear();
  }

  getUserData() {
    const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');
    this.userData = userdata;
  }

}