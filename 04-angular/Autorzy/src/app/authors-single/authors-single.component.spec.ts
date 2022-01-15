import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsSingleComponent } from './authors-single.component';

describe('AuthorsSingleComponent', () => {
  let component: AuthorsSingleComponent;
  let fixture: ComponentFixture<AuthorsSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorsSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
