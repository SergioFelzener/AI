import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitch01Component } from './ng-switch01.component';

describe('NgSwitch01Component', () => {
  let component: NgSwitch01Component;
  let fixture: ComponentFixture<NgSwitch01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwitch01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitch01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
