import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zad5DetailsComponent } from './zad5-details.component';

describe('Zad5DetailsComponent', () => {
  let component: Zad5DetailsComponent;
  let fixture: ComponentFixture<Zad5DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zad5DetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zad5DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
