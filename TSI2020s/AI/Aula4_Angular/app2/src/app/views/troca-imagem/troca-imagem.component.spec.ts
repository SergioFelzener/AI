import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrocaImagemComponent } from './troca-imagem.component';

describe('TrocaImagemComponent', () => {
  let component: TrocaImagemComponent;
  let fixture: ComponentFixture<TrocaImagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrocaImagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrocaImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
