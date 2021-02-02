import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeBookCommentsComponent } from './change-book-comments.component';

describe('ChangeBookCommentsComponent', () => {
  let component: ChangeBookCommentsComponent;
  let fixture: ComponentFixture<ChangeBookCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeBookCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeBookCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
