import { TestBed } from '@angular/core/testing';

import { Zad7Service } from './zad7.service';

describe('Zad7Service', () => {
  let service: Zad7Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Zad7Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
