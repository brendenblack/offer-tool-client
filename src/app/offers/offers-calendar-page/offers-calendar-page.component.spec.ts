import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersCalendarPageComponent } from './offers-calendar-page.component';

describe('OffersCalendarPageComponent', () => {
  let component: OffersCalendarPageComponent;
  let fixture: ComponentFixture<OffersCalendarPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersCalendarPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersCalendarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
