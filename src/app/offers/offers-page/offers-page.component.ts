import { Component, OnInit } from '@angular/core';
import { Offer } from '../../core/models';

@Component({
  templateUrl: './offers-page.component.html',
  styleUrls: ['./offers-page.component.css']
})
export class OffersPageComponent {

  constructor() { }

  private selectedOffers: Offer[] = [];

  onSelection(offer: Offer) {
    const index = this.selectedOffers.findIndex(o => o === offer);
    if (index < 0) {
      this.selectedOffers.push(offer);
    }
  }
}
