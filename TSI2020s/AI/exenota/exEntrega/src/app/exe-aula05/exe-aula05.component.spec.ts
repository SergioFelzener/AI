import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeAula05Component } from './exe-aula05.component';

describe('ExeAula05Component', () => {
  let component: ExeAula05Component;
  let fixture: ComponentFixture<ExeAula05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExeAula05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExeAula05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
