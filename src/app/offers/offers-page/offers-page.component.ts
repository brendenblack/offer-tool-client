import { Component, OnInit } from '@angular/core';
import { Offer } from '../../core/models';

@Component({
  templateUrl: './offers-page.component.html',
  styleUrls: ['./offers-page.component.css']
})
export class OffersPageComponent {

  constructor() { }

  private _selectedOffers: Offer[] = [];

  get selectedOffers(): Offer[] {
    return this._selectedOffers;
  }

  onSelection(offer: Offer) {
    const index = this.selectedOffers.findIndex(o => o === offer);
    if (index < 0) {
      this.selectedOffers.push(offer);
    }
  }

  onClearSelection(offer: Offer) {
    this._selectedOffers = this.selectedOffers.filter(o => o !== offer);
  }

  onClearAll() {
    this._selectedOffers = [];
  }

}
