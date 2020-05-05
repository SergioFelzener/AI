import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitch02Component } from './ng-switch02.component';

describe('NgSwitch02Component', () => {
  let component: NgSwitch02Component;
  let fixture: ComponentFixture<NgSwitch02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwitch02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitch02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
