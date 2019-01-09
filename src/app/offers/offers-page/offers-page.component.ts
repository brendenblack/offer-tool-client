import { Component, OnInit } from '@angular/core';
import { OfferSummary } from '../../core/models';

@Component({
  templateUrl: './offers-page.component.html',
  styleUrls: ['./offers-page.component.css']
})
export class OffersPageComponent {

  constructor() { }

  private _selectedOffers: OfferSummary[] = [];

  get selectedOffers(): OfferSummary[] {
    return this._selectedOffers;
  }

  onSelection(offer: OfferSummary) {
    const index = this.selectedOffers.findIndex(o => o === offer);
    if (index < 0) {
      this.selectedOffers.push(offer);
    }
  }

  onClearSelection(offer: OfferSummary) {
    this._selectedOffers = this.selectedOffers.filter(o => o !== offer);
  }

  onClearAll() {
    this._selectedOffers = [];
  }

}
