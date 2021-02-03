import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectorBasedBookUpdateComponent } from './lector-based-book-update.component';

describe('LectorBasedBookUpdateComponent', () => {
  let component: LectorBasedBookUpdateComponent;
  let fixture: ComponentFixture<LectorBasedBookUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectorBasedBookUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectorBasedBookUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
