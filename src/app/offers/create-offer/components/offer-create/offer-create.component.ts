import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { Unit, Offer } from 'src/app/core/models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateOfferService } from '../../create-offer.service';
import { OfferService } from 'src/app/core/services';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-offer-create',
  templateUrl: './offer-create.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./offer-create.component.css']
})
export class OfferCreateComponent implements OnInit {

  constructor(private createOfferService: CreateOfferService, private offerService: OfferService, private modalService: NgbModal) {
  }

  offerContentSubscription: Subscription;
  offerDisplayedItemsSubscription: Subscription;

  offer: Offer;

  isDetailsCollapsed = false;
  isTimeFieldsCollapsed = true;
  isContentCollapsed = false;
  isDisplayCollapsed = false;
  isCreatingOffer = false;

  successMessage: string;
  errorMessage: string;

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

  incrementDisplayItem(itemCode: string): void {
    this.createOfferService.addItemToDisplay(itemCode);
  }

  decrementDisplayItem(itemCode: string): void {
    this.createOfferService.removeItemFromDisplay(itemCode);
  }

  formatDate(date: Date): string {
    let d = date.toLocaleDateString('en-CA');
    let t = date.toLocaleTimeString('en-GB');

    return d + 'T' + t;
  }

  createOffer(): void {
    this.isCreatingOffer = true;
    this.offer.code = 'OfferCode';
    this.offer.title = 'offer title is this';
    this.offer.description = 'a descriptive text blob';
    this.offer.iconTitle = 'title';
    this.offer.iconDescription = 'short desc';
    console.log(this.offer);
    this.offerService.createOffer(this.offer)
      .pipe(finalize(() => { this.isCreatingOffer = false; }))
      .subscribe(result => { 
        console.log(result);
            let count = result.offers.length;
            if (count == 1) {
              this.successMessage = '1 offer successfully created';
            } else {
              console.warn('Unexpected quantity of offers created. This component should only create a single offer at a time, but result returned ' + count);
              this.successMessage = `${count} offers successfully created`;
            }
            
            // clear the created offer 
            this.offer = new Offer()
        },
        error => {
          this.errorMessage = error.errors;
        });
  }

  ngOnInit() {
    this.offer = new Offer();

    this.offerContentSubscription = this.createOfferService.offerContent$.subscribe(content => {
      this.offer.content = content;
    });

    this.offerDisplayedItemsSubscription = this.createOfferService.offerDisplayedItems$.subscribe(items => {
      this.offer.display = items;
    });
  }

}
