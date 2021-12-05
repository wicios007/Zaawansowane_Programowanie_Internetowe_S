import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zad12SecondComponent } from './zad12-second.component';

describe('Zad12SecondComponent', () => {
  let component: Zad12SecondComponent;
  let fixture: ComponentFixture<Zad12SecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zad12SecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zad12SecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
