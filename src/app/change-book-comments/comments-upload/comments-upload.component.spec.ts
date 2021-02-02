import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsUploadComponent } from './comments-upload.component';

describe('CommentsUploadComponent', () => {
  let component: CommentsUploadComponent;
  let fixture: ComponentFixture<CommentsUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
