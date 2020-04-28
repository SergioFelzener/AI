import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfexe01Component } from './ng-ifexe01.component';

describe('NgIfexe01Component', () => {
  let component: NgIfexe01Component;
  let fixture: ComponentFixture<NgIfexe01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfexe01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfexe01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
