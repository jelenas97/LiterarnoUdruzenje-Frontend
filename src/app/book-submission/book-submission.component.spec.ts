import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSubmissionComponent } from './book-submission.component';

describe('BookSubmissionComponent', () => {
  let component: BookSubmissionComponent;
  let fixture: ComponentFixture<BookSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSubmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
