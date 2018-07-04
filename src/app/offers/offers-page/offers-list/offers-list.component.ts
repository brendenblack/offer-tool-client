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
  private onlyActive = false;
  private displayMode: String = 'table';
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
    this.offers = this.allOffers.filter(offer => offer.startTime >= this.startDate && offer.endTime <= this.endDate);
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
