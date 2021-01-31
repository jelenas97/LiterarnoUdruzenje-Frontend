import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadAndDecideComponent } from './download-and-decide.component';

describe('DownloadAndDecideComponent', () => {
  let component: DownloadAndDecideComponent;
  let fixture: ComponentFixture<DownloadAndDecideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadAndDecideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadAndDecideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
