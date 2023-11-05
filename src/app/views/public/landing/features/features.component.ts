import { Component, OnInit } from '@angular/core';
import { DATA_FEATURES } from 'src/app/data/features';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  public features:any[] = [];

  constructor() { }

  ngOnInit() {
    this.features = DATA_FEATURES;
  }

}
