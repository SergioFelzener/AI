import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFor04Component } from './ng-for04.component';

describe('NgFor04Component', () => {
  let component: NgFor04Component;
  let fixture: ComponentFixture<NgFor04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFor04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFor04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
