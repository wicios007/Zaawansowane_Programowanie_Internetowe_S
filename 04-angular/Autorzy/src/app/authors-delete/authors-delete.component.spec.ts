import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsDeleteComponent } from './authors-delete.component';

describe('AuthorsDeleteComponent', () => {
  let component: AuthorsDeleteComponent;
  let fixture: ComponentFixture<AuthorsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorsDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
