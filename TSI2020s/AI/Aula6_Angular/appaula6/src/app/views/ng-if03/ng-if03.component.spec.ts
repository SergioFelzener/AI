import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIf03Component } from './ng-if03.component';

describe('NgIf03Component', () => {
  let component: NgIf03Component;
  let fixture: ComponentFixture<NgIf03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIf03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIf03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
