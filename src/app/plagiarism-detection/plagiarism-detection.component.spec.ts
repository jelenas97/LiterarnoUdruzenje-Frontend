import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlagiarismDetectionComponent } from './plagiarism-detection.component';

describe('PlagiarismDetectionComponent', () => {
  let component: PlagiarismDetectionComponent;
  let fixture: ComponentFixture<PlagiarismDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlagiarismDetectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlagiarismDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
