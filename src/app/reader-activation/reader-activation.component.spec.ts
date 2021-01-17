import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderActivationComponent } from './reader-activation.component';

describe('ReaderActivationComponent', () => {
  let component: ReaderActivationComponent;
  let fixture: ComponentFixture<ReaderActivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaderActivationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
