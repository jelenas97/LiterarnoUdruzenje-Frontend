import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlagiarismDecisionComponent } from './plagiarism-decision.component';

describe('PlagiarismDecisionComponent', () => {
  let component: PlagiarismDecisionComponent;
  let fixture: ComponentFixture<PlagiarismDecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlagiarismDecisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlagiarismDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
