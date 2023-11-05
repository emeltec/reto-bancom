import { Component, OnInit } from '@angular/core';
import { DATA_ACHIEVS } from 'src/app/data/achievs';

@Component({
  selector: 'app-achiev',
  templateUrl: './achiev.component.html',
  styleUrls: ['./achiev.component.scss']
})
export class AchievComponent implements OnInit {

  public achievements: any[] = [];

  constructor() { }

  ngOnInit() {
    this.achievements = DATA_ACHIEVS;
  }

}
