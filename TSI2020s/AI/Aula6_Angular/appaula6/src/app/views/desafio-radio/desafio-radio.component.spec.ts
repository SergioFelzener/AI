import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioRadioComponent } from './desafio-radio.component';

describe('DesafioRadioComponent', () => {
  let component: DesafioRadioComponent;
  let fixture: ComponentFixture<DesafioRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesafioRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesafioRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
