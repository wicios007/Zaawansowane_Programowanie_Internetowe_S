import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zad19Component } from './zad19.component';

describe('Zad19Component', () => {
  let component: Zad19Component;
  let fixture: ComponentFixture<Zad19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zad19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zad19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
