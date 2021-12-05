import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zad7Component } from './zad7.component';

describe('Zad7Component', () => {
  let component: Zad7Component;
  let fixture: ComponentFixture<Zad7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zad7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zad7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
