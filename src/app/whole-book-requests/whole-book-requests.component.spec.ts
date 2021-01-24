import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholeBookRequestsComponent } from './whole-book-requests.component';

describe('WholeBookRequestsComponent', () => {
  let component: WholeBookRequestsComponent;
  let fixture: ComponentFixture<WholeBookRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WholeBookRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WholeBookRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
