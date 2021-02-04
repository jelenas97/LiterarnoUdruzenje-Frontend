import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskBetaReadersComponent } from './ask-beta-readers.component';

describe('AskBetaReadersComponent', () => {
  let component: AskBetaReadersComponent;
  let fixture: ComponentFixture<AskBetaReadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskBetaReadersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskBetaReadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
