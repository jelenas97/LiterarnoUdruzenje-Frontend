import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteNoteDownloadComponent } from './write-note-download.component';

describe('WriteNoteDownloadComponent', () => {
  let component: WriteNoteDownloadComponent;
  let fixture: ComponentFixture<WriteNoteDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteNoteDownloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteNoteDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
