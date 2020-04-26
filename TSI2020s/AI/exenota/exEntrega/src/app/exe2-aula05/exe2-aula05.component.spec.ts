import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe2Aula05Component } from './exe2-aula05.component';

describe('Exe2Aula05Component', () => {
  let component: Exe2Aula05Component;
  let fixture: ComponentFixture<Exe2Aula05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exe2Aula05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exe2Aula05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
