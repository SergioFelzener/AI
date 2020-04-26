import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFor01Component } from './ng-for01.component';

describe('NgFor01Component', () => {
  let component: NgFor01Component;
  let fixture: ComponentFixture<NgFor01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFor01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFor01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
