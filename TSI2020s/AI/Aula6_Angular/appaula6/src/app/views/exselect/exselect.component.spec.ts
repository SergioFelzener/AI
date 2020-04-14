import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExselectComponent } from './exselect.component';

describe('ExselectComponent', () => {
  let component: ExselectComponent;
  let fixture: ComponentFixture<ExselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
