import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseBetaReadersComponent } from './choose-beta-readers.component';

describe('ChooseBetaReadersComponent', () => {
  let component: ChooseBetaReadersComponent;
  let fixture: ComponentFixture<ChooseBetaReadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseBetaReadersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseBetaReadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
