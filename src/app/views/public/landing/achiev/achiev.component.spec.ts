/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AchievComponent } from './achiev.component';

describe('AchievComponent', () => {
  let component: AchievComponent;
  let fixture: ComponentFixture<AchievComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
