import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { Colours } from '../../shared/utils/colours/';

@Component({
  selector: 'app-offers-calendar-page',
  templateUrl: './offers-calendar-page.component.html',
  styleUrls: ['./offers-calendar-page.component.css']
})
export class OffersCalendarPageComponent implements OnInit {

  constructor() { }

  viewDate: Date = new Date();
  events: CalendarEvent[] = [];

  ngOnInit() {
  }

}
