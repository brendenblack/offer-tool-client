import { Component, Input, Output, EventEmitter, AfterViewChecked, ChangeDetectorRef, IterableDiffers, DoCheck } from '@angular/core';
import { OfferSummary, OfferEntity} from '../../../core/models';
import { OfferService, OfferCloneSkeleton } from '../../../core/services';
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
  generatedFor: number[] = [];

  get canGenerateOffers(): boolean {
    // TODO
    return true;
  }

  @Output() clearSelected = new EventEmitter<OfferSummary>();
  @Output() clearAll = new EventEmitter();

  ngDoCheck(): void {
    for (const offer of this.offers) {
      if (offer.newCode === undefined) {
        // if no new code is yet set, set it to the current value + 2 (respecting the max limit of 20 characters)
        offer.newCode = ((offer.offerCode.length >= 20) ? offer.offerCode.substr(0, 19) : offer.offerCode) + '2';
      }
    }
  }

  doClearSelected(offer: OfferSummary) {
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
    const targets = new Map<number, String>();
    for (const offer of this.offers) {
      targets.set(offer.id, offer.newCode);
    }

    this.offerService.getCloneSql(targets).subscribe(data => {
      this.sqlStatement = data;
      this.modalService.open(sqlModal, { ariaLabelledBy: 'modal-basic-title'});
    });
  }

  doGenerateSql2(sqlModal) {
    const generateFor = this.offers.map(o => o.id);

    if (JSON.stringify(this.generatedFor.sort()) !== JSON.stringify(generateFor.sort())) {
      this.sqlStatement = '';
      const insert = squel.insert({ autoQuoteFieldNames: true }).into('offers');

      console.log(this.offers);

      this.offerService.getOffers(generateFor).subscribe((data: OfferCloneSkeleton[]) => {
        const fieldRows = [];
        // tslint:disable-next-line:no-bitwise
        const startTime = (new Date().getTime() / 1000) | 0; // https://stackoverflow.com/a/8388831
        const endTime = startTime + (86400 * 3);
        for (const o of data) {
          const newCode = this.offers.find(c => c.id === o.id).newCode || 'NewCode';
          fieldRows.push({
            offer_code: newCode,
            title: o.title.replace('\'', '\'\''),
            desc: o.description.replace('\'', '\'\'') || '',
            icon_title: o.iconTitle.replace('\'', '\'\'') || '',
            icon_desc: o.iconDescription.replace('\'', '\'\'') || '',
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
        }

        console.log('field rows:');
        console.log(fieldRows);

        insert.setFieldsRows(fieldRows);
        const regex = /\),\s\(/g;
        this.sqlStatement = insert.toString().replace(' VALUES ', '<br />VALUES<br />').replace(regex, '),<br />(');
        this.generatedFor = generateFor;
      });
    }

    this.modalService.open(sqlModal, { ariaLabelledBy: 'modal-basic-title', size: 'lg' });
  }
}

export class CloneOffer extends OfferSummary {
  newCode: String;
}
