import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zad12FirstComponent } from './zad12-first.component';

describe('Zad12FirstComponent', () => {
  let component: Zad12FirstComponent;
  let fixture: ComponentFixture<Zad12FirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zad12FirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zad12FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
