import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFor02Component } from './ng-for02.component';

describe('NgFor02Component', () => {
  let component: NgFor02Component;
  let fixture: ComponentFixture<NgFor02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFor02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFor02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
