import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { OfferService } from '../../../core/services';
import { Offer } from '../../../core/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-offers-calendar',
  templateUrl: './offers-calendar.component.html',
  styleUrls: ['./offers-calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OffersCalendarComponent implements OnInit {

  // @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  // private calendarOptions: Options;
  // private events: EventObject[] = [];

  private _loading = false;
  get isLoading(): boolean { return this._loading; }
  constructor(private offersService: OfferService) { }

  ngOnInit() {
    // this.calendarOptions = {
    //   editable: false,
    //   eventLimit: false,
    //   header: {
    //     left: 'prev,next today',
    //     center: 'title',
    //     right: ''
    //   },
    //   events: []
    // };

    this.getOffers();
  }

  getOffers() {
    // this._loading = true;
    // console.log('fetching offers');
    // this.events = [];
    // this.offersService.getOffers(false).subscribe(data => {

    //   data.forEach(offer => {
    //     const event: EventObject = {
    //       id: offer.id,
    //       title: offer.offerCode,
    //       start: new Date(offer.startTime * 1000),
    //       end: new Date(offer.endTime * 1000)
    //     };
    //     console.log('adding event');
    //     this.events.push(event);
    //   });
    //   this._loading = false;
    //   console.log('rendering ' + this.events.length + ' events');
    //   this.ucCalendar.fullCalendar('renderEvents', this.events);
    // });
  }

  eventClick(model: any): void {
    console.log(model);
  }

}
