import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MudaCssComponent } from './muda-css.component';

describe('MudaCssComponent', () => {
  let component: MudaCssComponent;
  let fixture: ComponentFixture<MudaCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MudaCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MudaCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
