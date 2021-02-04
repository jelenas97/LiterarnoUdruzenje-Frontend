import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalCorrectionsComponent } from './final-corrections.component';

describe('FinalCorrectionsComponent', () => {
  let component: FinalCorrectionsComponent;
  let fixture: ComponentFixture<FinalCorrectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalCorrectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalCorrectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
