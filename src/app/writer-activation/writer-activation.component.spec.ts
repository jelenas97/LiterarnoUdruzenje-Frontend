import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriterActivationComponent } from './writer-activation.component';

describe('WriterActivationComponent', () => {
  let component: WriterActivationComponent;
  let fixture: ComponentFixture<WriterActivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriterActivationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriterActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
