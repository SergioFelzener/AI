import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeNomeComponent } from './exibe-nome.component';

describe('ExibeNomeComponent', () => {
  let component: ExibeNomeComponent;
  let fixture: ComponentFixture<ExibeNomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibeNomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibeNomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
