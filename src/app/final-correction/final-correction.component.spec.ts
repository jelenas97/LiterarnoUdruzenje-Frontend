import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalCorrectionComponent } from './final-correction.component';

describe('FinalCorrectionComponent', () => {
  let component: FinalCorrectionComponent;
  let fixture: ComponentFixture<FinalCorrectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalCorrectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
