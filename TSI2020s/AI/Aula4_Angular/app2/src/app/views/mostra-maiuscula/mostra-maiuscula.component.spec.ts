import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraMaiusculaComponent } from './mostra-maiuscula.component';

describe('MostraMaiusculaComponent', () => {
  let component: MostraMaiusculaComponent;
  let fixture: ComponentFixture<MostraMaiusculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostraMaiusculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostraMaiusculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
