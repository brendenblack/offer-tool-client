import { Component, Input, Output, EventEmitter, AfterViewChecked, ChangeDetectorRef, IterableDiffers, DoCheck } from '@angular/core';
import { Offer, CreateOffer } from '../../../core/models';
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

  get canGenerateOffers(): boolean {
    // TODO
    return true;
  }

  @Output() clearSelected = new EventEmitter<Offer>();
  @Output() clearAll = new EventEmitter();

  ngDoCheck(): void {
    for (const offer of this.offers) {
      if (offer.newCode === undefined) {
        // if no new code is yet set, set it to the current value + 2 (respecting the max limit of 20 characters)
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
    const insert = squel.insert({ autoQuoteFieldNames: true }).into('offers');

    this.offerService.getCloneDetails(this.offers.map(o => o.id)).subscribe((data: CreateOffer[]) => {
      const fieldRows = [];
      // tslint:disable-next-line:no-bitwise
      const startTime = (new Date().getTime() / 1000) | 0; // https://stackoverflow.com/a/8388831
      const endTime = startTime + (86400 * 3);
      for (const o of data) {
        fieldRows.push({
          offer_code: 'newcode',
          title: o.title,
          desc: o.description || '',
          icon_title: o.iconTitle || '',
          icon_desc: o.iconDescription || '',
          COST: o.cost,
          COST_SKU: o.costSku,
          DISPLAY_OPTIONS: o.displayOptions,
          DURATION: o.duration,
          START_TIME: startTime,
          END_TIME: endTime,
          CREATED_TIME: startTime,
          MOD_TIME: startTime,
          IS_ENABLED: 1,
          IS_DELETED: 0,
          PRE_REQ: o.prerequisite,
          COOLDOWN: 0,
          COOLDOWN_TYPE: 0,
          PRIORITY: o.priority,
          CONTENT: o.content,
          DISPLAYED_ITEMS: o.displayedItems,
          MAX_QTY: o.maxQuantity,
          FULL_COST: o.fullCost,
          TEMPLATE_ID: o.templateId
        });
        console.log(o);
      }
      insert.setFieldsRows(fieldRows);

      this.sqlStatement = insert.toString();
      
      this.modalService.open(sqlModal, { ariaLabelledBy: 'modal-basic-title', size: 'lg' });
    });
  }
}

export class CloneOffer extends Offer {
  newCode: String;
}
