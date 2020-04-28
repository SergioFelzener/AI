import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfexe04Component } from './ng-ifexe04.component';

describe('NgIfexe04Component', () => {
  let component: NgIfexe04Component;
  let fixture: ComponentFixture<NgIfexe04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfexe04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfexe04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
