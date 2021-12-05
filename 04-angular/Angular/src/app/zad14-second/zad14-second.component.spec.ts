import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zad14SecondComponent } from './zad14-second.component';

describe('Zad14SecondComponent', () => {
  let component: Zad14SecondComponent;
  let fixture: ComponentFixture<Zad14SecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zad14SecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zad14SecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
