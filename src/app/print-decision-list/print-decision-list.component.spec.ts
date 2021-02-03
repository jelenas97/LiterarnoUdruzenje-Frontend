import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintDecisionListComponent } from './print-decision-list.component';

describe('PrintDecisionListComponent', () => {
  let component: PrintDecisionListComponent;
  let fixture: ComponentFixture<PrintDecisionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintDecisionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintDecisionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
