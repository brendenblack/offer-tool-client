import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CalendarUtils, CalendarEvent } from 'angular-calendar';
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

  constructor(private offersService: OfferService) { }

  viewDate: Date = new Date();

  events$: Observable<Array<CalendarEvent<{ offer: Offer }>>>; // = new Observable<Array<CalendarEvent<{ offer: Offer }>>>();

  ngOnInit() {
    this.getOffers();
  }

  getOffers() {
    console.log('getting events');
    this.events$ = this.offersService.getOffers(false).pipe(
      map((results: Offer[]) => {
        return results.map((offer: Offer) => {
          const event = {
            title: offer.offerCode,
            color: {
              primary: '#ad2121',
              secondary: '#FAE3E3'
            },
            start: new Date(offer.startTime * 1000),
            end: new Date(offer.endTime * 1000),
            meta: {
              offer
            }
          };
          console.log(event);
          return event;
        });
      }));

    // this.offersService.getOffers(false).subscribe(data => {
    //   this.events = [];
    //   data.forEach(offer => {
    //     console.log(new Date(offer.startTime * 1000));
    //     const start = new Date(offer.startTime * 1000);
    //     const end = new Date(offer.endTime * 1000);
    //     const event: CalendarEvent<{ offer: Offer }> = {
    //       title: offer.offerCode,
    //       color: {
    //         primary: '#ad2121',
    //         secondary: '#FAE3E3'
    //       },
    //       start: start,
    //       end: end,
    //       meta: {
    //         offer
    //       }
    //     };
    //     // console.log(event);
    //     this.events.push(event);
    //   });
    // });
  }

  eventClicked(event: CalendarEvent): void {
    console.log(event);
  }

}
