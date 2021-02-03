import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectorsCorrectionListComponent } from './lectors-correction-list.component';

describe('LectorsCorrectionListComponent', () => {
  let component: LectorsCorrectionListComponent;
  let fixture: ComponentFixture<LectorsCorrectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectorsCorrectionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectorsCorrectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
