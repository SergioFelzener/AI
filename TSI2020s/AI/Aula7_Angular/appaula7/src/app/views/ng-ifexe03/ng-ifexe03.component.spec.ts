import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfexe03Component } from './ng-ifexe03.component';

describe('NgIfexe03Component', () => {
  let component: NgIfexe03Component;
  let fixture: ComponentFixture<NgIfexe03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfexe03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfexe03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
