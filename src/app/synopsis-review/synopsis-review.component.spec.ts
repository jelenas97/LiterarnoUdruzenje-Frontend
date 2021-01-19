import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynopsisReviewComponent } from './synopsis-review.component';

describe('SynopsisReviewComponent', () => {
  let component: SynopsisReviewComponent;
  let fixture: ComponentFixture<SynopsisReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynopsisReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SynopsisReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
