import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zad20Component } from './zad20.component';

describe('Zad20Component', () => {
  let component: Zad20Component;
  let fixture: ComponentFixture<Zad20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zad20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zad20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
