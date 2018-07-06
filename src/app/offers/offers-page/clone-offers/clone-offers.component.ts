import { Component, Input, Output, EventEmitter, AfterViewChecked, ChangeDetectorRef, IterableDiffers, DoCheck } from '@angular/core';
import { Offer } from '../../../core/models';
import { OfferService } from '../../../core/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as squel from 'squel/';

@Component({
  selector: 'app-clone-offers',
  templateUrl: './clone-offers.component.html',
  styleUrls: ['./clone-offers.component.css']
})
export class CloneOffersComponent implements DoCheck {
  // private ref: ChangeDetectorRef,
  constructor(private offerService: OfferService, private modalService: NgbModal) { }

  @Input()
  offers: CloneOffer[] = [];

  sqlStatement: String = '';
  // @Input()
  // set offers(offers: Offer[]) {
  //   console.log('setting offers');
  //   this._offers = offers as CloneOffer[];
  //   console.log(this._offers);
  // }

  // _offers: CloneOffer[] = [];

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
    // for (const offer of this.offers) {
    //   if (offer.newCode === undefined) {
    //     offer.newCode = ((offer.offerCode.length >= 20) ? offer.offerCode.substr(0, 19) : offer.offerCode) + '2';
    //   }
    // }
    return true;
  }

  @Output() clearSelected = new EventEmitter<Offer>();
  @Output() clearAll = new EventEmitter();

  ngDoCheck(): void {
    console.log('do check');
    for (const offer of this.offers) {
      if (offer.newCode === undefined) {
        offer.newCode = ((offer.offerCode.length >= 20) ? offer.offerCode.substr(0, 19) : offer.offerCode) + '2';
      }
    }
  }

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

  doGenerateSql(sqlModal) {
    console.log(this.offers);
    const targets = new Map<number, String>();
    for (const offer of this.offers) {
      targets.set(offer.id, offer.newCode);
    }
    console.log(targets);

    this.offerService.getCloneSql(targets).subscribe(data => {
      console.log(data);
      this.sqlStatement = data;
      this.modalService.open(sqlModal, { ariaLabelledBy: 'modal-basic-title'});
    });
  }

  doGenerateSql2(sqlModal) {
    const insert = squel.insert().into('offers');

    const fieldRows = [];
    for (const offer of this.offers) {
      fieldRows.push({ offer_code: offer.newCode });
    }

    insert.setFieldsRows(fieldRows);

    console.log(insert.toString());
    this.sqlStatement = insert.toString();
    this.modalService.open(sqlModal, { ariaLabelledBy: 'modal-basic-title'});
  }

  // ngAfterViewChecked(): void {
  //   this.ref.detectChanges();
  // }

}


export class CloneOffer extends Offer {
  newCode: String;
}
