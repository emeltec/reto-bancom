import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPost } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public dataPosts$ = new BehaviorSubject<IPost>({} as IPost);

  constructor() { }

}
