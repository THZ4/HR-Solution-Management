import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventNewsComponent } from './event-news.component';

describe('EventNewsComponent', () => {
  let component: EventNewsComponent;
  let fixture: ComponentFixture<EventNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventNewsComponent]
    });
    fixture = TestBed.createComponent(EventNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
