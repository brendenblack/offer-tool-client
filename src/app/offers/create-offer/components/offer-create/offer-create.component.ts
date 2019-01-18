import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { Unit, Offer } from 'src/app/core/models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateOfferService } from '../../create-offer.service';
import { OfferService } from 'src/app/core/services';

@Component({
  selector: 'app-offer-create',
  templateUrl: './offer-create.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./offer-create.component.css']
})
export class OfferCreateComponent implements OnInit {

  constructor(private createOfferService: CreateOfferService, private offerService: OfferService, private modalService: NgbModal) {
    this.offer = new Offer();

    this.offerContentSubscription = createOfferService.offerContent$.subscribe(content => {
      this.offer.content = content;
    });

    this.offerDisplayedItemsSubscription = createOfferService.offerDisplayedItems$.subscribe(items => {
      this.offer.display = items;
    });
  }

  offerContentSubscription: Subscription;
  offerDisplayedItemsSubscription: Subscription;



  offer: Offer;

  isDetailsCollapsed = false;
  isTimeFieldsCollapsed = true;
  isContentCollapsed = false;
  isDisplayCollapsed = false;

  private templateValueCapacity = { 1: 0, 6: 1, 4: 3, 5: 4, 3: 5, 2: 6 };

  openModal(content) {
    this.modalService.open(content, { centered: true, size: 'sm' });
  }

  get startDateString(): string {
    return this.formatDate(this.offer.startDate);
  }

  set startDateString(value: string) {
    this.offer.startDate = new Date(value);
  }

  get endDateString(): string {
    return this.formatDate(this.offer.endDate);
  }

  set endDateString(value: string) {
    this.offer.endDate = new Date(value);
  }

  incrementSku(sku: string): void {
    this.createOfferService.addSkuToContent(sku);
  }

  decrementSku(sku: string): void {
    this.createOfferService.removeSkuFromContent(sku);
  }

  incrementPrebuilt(unit: Unit): void {
    this.createOfferService.addPrebuiltUnit(unit);
  }

  decrementPrebuilt(unit: Unit): void {
    this.createOfferService.removePrebuiltUnit(unit);
  }

  formatDate(date: Date): string {
    let d = date.toLocaleDateString('en-CA');
    let t = date.toLocaleTimeString('en-GB');

    return d + 'T' + t;
  }

  createOffer(): void {
    this.offer.code = 'OfferCode';
    this.offer.title = 'offer title is this';
    this.offer.description = 'a descriptive text blob';
    this.offer.iconTitle = 'title';
    this.offer.iconDescription = 'short desc';
    this.offerService.createOffer(this.offer);
  }

  ngOnInit() {

  }

}
