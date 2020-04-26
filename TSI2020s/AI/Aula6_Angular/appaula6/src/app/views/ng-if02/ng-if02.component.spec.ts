import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIf02Component } from './ng-if02.component';

describe('NgIf02Component', () => {
  let component: NgIf02Component;
  let fixture: ComponentFixture<NgIf02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIf02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIf02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
