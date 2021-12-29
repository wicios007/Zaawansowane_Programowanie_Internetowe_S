import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zad7SecondComponent } from './zad7-second.component';

describe('Zad7SecondComponent', () => {
  let component: Zad7SecondComponent;
  let fixture: ComponentFixture<Zad7SecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zad7SecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zad7SecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
