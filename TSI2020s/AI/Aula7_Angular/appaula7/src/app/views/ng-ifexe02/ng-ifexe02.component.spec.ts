import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfexe02Component } from './ng-ifexe02.component';

describe('NgIfexe02Component', () => {
  let component: NgIfexe02Component;
  let fixture: ComponentFixture<NgIfexe02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfexe02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfexe02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
