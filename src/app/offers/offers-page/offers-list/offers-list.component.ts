import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OfferService } from '../../../core/services';
import { OfferSummary } from '../../../core/models';
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
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {

  constructor(private offersService: OfferService) {
  }

  private offers: OfferSummary[] = [];
  private displayedOfferCount: number = this.offers.length;
  private allOffers: OfferSummary[] = [];
  private allOfferCount: number = this.allOffers.length;
  private startDate: number;
  private endDate: number;

  // Filter details
  private onlyActive = false;
  private displayMode: 'box' | 'table' = 'box'; // 'table';
  private filterString: String;
  private orderByFields: String[] = [ 'Revenue', 'Start time', 'End time', 'Cohort size', 'Unique purchasers', 'Cost' ];
  private sortDirection: String = 'descending';
  private sortBy: String = 'Start time';

  selectedOffers: OfferSummary[] = [];

  @Output() selected = new EventEmitter<OfferSummary>();


  ngOnInit() {
    // this.startDate = 0;
    // this.endDate = 1557148793;

    // let o1 = new OfferSummary();
    // o1.offerCode = 'Jan19TestCode';
    // o1.id = 1;
    // o1.title = 'Test Your Offers';
    // o1.cohortSize = 123457;
    // o1.uniquePurchased = 1745;
    // o1.cost = 99;
    // o1.fullCost = 300;
    // o1.costSku = 'gold';
    // o1.approximateRevenue = o1.cost * 0.07 * o1.uniquePurchased;
    // o1.startTime = new Date().getTime() / 1000;
    // o1.endTime = new Date().getTime() / 1000 + 86400;
    // o1.active = true;
    // o1.duration = 8640;

    // let o2 = new OfferSummary();
    // o2.offerCode = 'Jan19TestCode2';
    // o2.id = 1;
    // o2.title = 'Test Your Other Offers';
    // o2.cohortSize = 123457;
    // o2.uniquePurchased = 2459;
    // o2.cost = 99;
    // o2.fullCost = 300;
    // o2.costSku = 'gold';
    // o2.approximateRevenue = o2.cost * 0.07 * o2.uniquePurchased;
    // o2.startTime = new Date().getTime() / 1000;
    // o2.endTime = new Date().getTime() / 1000 + 86400;
    // o2.active = true;
    // o2.duration = 8640;

    // this.allOffers.push(o1, o2);
    // this.offers = this.allOffers;

    this.getOffers();
  }

  getOffers() {
    this.offersService.getAllOffers(this.onlyActive).subscribe(data => {
      this.allOffers = data;
      const startDates = this.allOffers.map(( { startTime }) => startTime );
      this.startDate = Math.min(...startDates);
      const endDates = this.allOffers.map(( { endTime}) => endTime);
      this.endDate = Math.max(...endDates);
      this.filterOffers();
    });
  }

  setDisplayMode(displayMode: 'box' | 'table') {
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

  updateCloneList(offer: OfferSummary) {
    this.selected.emit(offer);
    // const index = this.selectedOffers.findIndex(o => o === offer);
    // if (index >= 0) {
    //   // this.selectedOffers = this.selectedOffers.filter(o => o !== offer);
    // } else {
    //   this.selectedOffers.push(offer);
    // }
  }
}
