import { Component, Input, Output, EventEmitter, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { Offer } from '../../../core/models';
import { OfferService } from '../../../core/services';

@Component({
  selector: 'app-clone-offers',
  templateUrl: './clone-offers.component.html',
  styleUrls: ['./clone-offers.component.css']
})
export class CloneOffersComponent implements AfterViewChecked {

  constructor(private offerService: OfferService, private ref: ChangeDetectorRef) { }

  @Input()
  offers: CloneOffer[] = [];


  // @Input('offers')
  // set offers(offers: Offer[]) {
  //   console.log('executing set');
  //   this._offers = offers;

  //   this.list.clear();

  //   for (const offer of offers) {
  //     const code = (offer.offerCode.length >= 20) ? offer.offerCode.substr(0, 19) : offer.offerCode;
  //     console.log('adding offer ' + offer.offerCode);
  //     this.list.set(offer.id, code + '2');
  //     console.log(this.list);
  //   }
  // }

  // get offers(): Offer[] {
  //   console.log('returning offers');
  //   return this._offers;
  // }

  // ugly
  get canGenerateOffers(): boolean {
    for (const offer of this.offers) {
      if (offer.newCode === undefined) {
        offer.newCode = ((offer.offerCode.length >= 20) ? offer.offerCode.substr(0, 19) : offer.offerCode) + '2';
      }
    }
    return true;
  }

  @Output() clearSelected = new EventEmitter<Offer>();
  @Output() clearAll = new EventEmitter();

  doClearSelected(offer: Offer) {
    // TODO: remove item from list; this.list.get(offer.id);
    this.clearSelected.emit(offer);
  }


  doClearAll() {
    this.clearAll.emit();
  }

  validateOfferCode(offer: CloneOffer): boolean {
    if (offer.newCode === undefined || offer.newCode === '' || offer.newCode === offer.offerCode) {
      return false;
    } else {
      return true;
    }
  }

  doGenerateSql() {
    console.log(this.offers);
    const map = new Map<number, String>();
    for (const offer of this.offers) {
      map.set(offer.id, offer.newCode);
    }
    console.log(map);
  }

  ngAfterViewChecked(): void {
    this.ref.detectChanges();
  }

}


export class CloneOffer extends Offer {
  newCode: String;
}
