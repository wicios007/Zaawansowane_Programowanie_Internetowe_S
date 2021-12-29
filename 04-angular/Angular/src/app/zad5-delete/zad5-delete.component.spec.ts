import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zad5DeleteComponent } from './zad5-delete.component';

describe('Zad5DeleteComponent', () => {
  let component: Zad5DeleteComponent;
  let fixture: ComponentFixture<Zad5DeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zad5DeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zad5DeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
