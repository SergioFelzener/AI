import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIf01Component } from './ng-if01.component';

describe('NgIf01Component', () => {
  let component: NgIf01Component;
  let fixture: ComponentFixture<NgIf01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIf01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIf01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
