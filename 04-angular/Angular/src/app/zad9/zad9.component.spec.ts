import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zad9Component } from './zad9.component';

describe('Zad9Component', () => {
  let component: Zad9Component;
  let fixture: ComponentFixture<Zad9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zad9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zad9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
