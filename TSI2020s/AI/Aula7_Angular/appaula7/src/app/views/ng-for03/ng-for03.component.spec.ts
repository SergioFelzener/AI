import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFor03Component } from './ng-for03.component';

describe('NgFor03Component', () => {
  let component: NgFor03Component;
  let fixture: ComponentFixture<NgFor03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFor03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFor03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
