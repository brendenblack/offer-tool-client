import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OfferService } from '../../../core/services';
import { Offer } from '../../../core/models';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;

@Component({
  selector: 'offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {

  constructor(private offersService: OfferService) {
  }

  private offers: Offer[] = [];
  private displayedOfferCount: number = this.offers.length;
  private allOffers: Offer[] = [];
  private allOfferCount: number = this.allOffers.length;
  private startDate: number;
  private endDate: number;

  // Filter details
  private onlyActive = false;
  private displayMode: String = 'table';
  private filterString: String;
  private orderByFields: String[] = [ 'Revenue', 'Start time', 'End time', 'Cohort size', 'Unique purchasers', 'Cost' ];
  private sortDirection: String = 'ascending';
  private sortBy: String = 'Start time';

  selectedOffers: Offer[] = [];

  @Output() selected = new EventEmitter<Offer>();


  ngOnInit() {
    this.getOffers();
  }

  getOffers() {
    this.offersService.getOffers(this.onlyActive).subscribe(data => {
      console.log(data);
      this.allOffers = data;

      const startDates = this.allOffers.map(( { startTime }) => startTime );
      this.startDate = Math.min(...startDates);
      const endDates = this.allOffers.map(( { endTime}) => endTime);
      this.endDate = Math.max(...endDates);

      this.filterOffers();
    });
  }

  setDisplayMode(displayMode: String) {
    this.displayMode = displayMode;
  }

  filterOffers() {
    // filter by date
    this.offers = this.allOffers.filter(offer => offer.startTime >= this.startDate && offer.endTime <= this.endDate);
    if (this.filterString != null && this.filterString !== undefined && this.filterString !== '') {
      this.offers = this.offers.filter(o => o.offerCode.toUpperCase().indexOf(this.filterString.toUpperCase()) >= 0 );
      // || o.title.toUpperCase().indexOf(this.filterString.toUpperCase()) > 0);
    }

    switch (this.sortBy) {
      case 'Revenue':
        this.offers = this.offers.sort(function(a, b) {
          return (a.approximateRevenue > b.approximateRevenue) ? 1 : ((b.approximateRevenue > a.approximateRevenue) ? -1 : 0);
        });
        break;
      case 'End time':
        this.offers = this.offers.sort(function(a, b) {
          return (a.endTime > b.endTime) ? 1 : ((b.endTime > a.endTime) ? -1 : 0);
        });
        break;
      case 'Cohort size':
        this.offers = this.offers.sort(function(a, b) {
          return (a.cohortSize > b.cohortSize) ? 1 : ((b.cohortSize > a.cohortSize) ? -1 : 0);
        });
        break;
      case 'Unique purchasers':
        this.offers = this.offers.sort(function(a, b) {
          return (a.uniquePurchased > b.uniquePurchased) ? 1 : ((b.uniquePurchased > a.uniquePurchased) ? -1 : 0);
        });
        break;
      case 'Cost':
        this.offers = this.offers.sort(function(a, b) {
          return (a.cost > b.cost) ? 1 : ((b.cost > a.cost) ? -1 : 0);
        });
        break;
      case 'Start time':
      default:
        this.offers = this.offers.sort(function(a, b) {
          return (a.startTime > b.startTime) ? 1 : ((b.startTime > a.startTime) ? -1 : 0);
        });
        break;
    }

    if (this.sortDirection === 'descending') {
      this.offers.reverse();
    }
  }

  setSortDirection(direction: String) {
    if (direction !== this.sortDirection) {
      this.sortDirection = direction;
      this.filterOffers();
    }
  }

  updateCloneList(offer: Offer) {
    this.selected.emit(offer);
    // const index = this.selectedOffers.findIndex(o => o === offer);
    // if (index >= 0) {
    //   // this.selectedOffers = this.selectedOffers.filter(o => o !== offer);
    // } else {
    //   this.selectedOffers.push(offer);
    // }
  }
}
