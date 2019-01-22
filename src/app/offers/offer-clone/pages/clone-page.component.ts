import { Component, OnInit } from '@angular/core';
import { OfferSummary } from '../../../core/models';

@Component({
  templateUrl: './clone-page.component.html',
  styleUrls: ['./clone-page.component.css']
})
export class ClonePageComponent {

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
