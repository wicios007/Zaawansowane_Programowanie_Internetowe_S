import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zad14FirstComponent } from './zad14-first.component';

describe('Zad14FirstComponent', () => {
  let component: Zad14FirstComponent;
  let fixture: ComponentFixture<Zad14FirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zad14FirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zad14FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
