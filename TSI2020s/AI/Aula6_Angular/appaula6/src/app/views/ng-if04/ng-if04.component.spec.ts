import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIf04Component } from './ng-if04.component';

describe('NgIf04Component', () => {
  let component: NgIf04Component;
  let fixture: ComponentFixture<NgIf04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIf04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIf04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
