import { Component, OnInit } from '@angular/core';
import { CreateOfferService } from 'src/app/offers/offer-create-page/create-offer.service';
import { Subscription } from 'rxjs';
import { AddOffer, Unit } from 'src/app/core/models';

@Component({
  selector: 'app-offer-create',
  templateUrl: './offer-create.component.html',
  styleUrls: ['./offer-create.component.css']
})
export class OfferCreateComponent implements OnInit {

  constructor(private createOfferService:CreateOfferService) { 
    this.offer = new AddOffer();

    this.offerContentSubscription = createOfferService.offerContent$.subscribe(content => {
      console.log('received content update');
      console.log(content);
      this.offer.content = content;
    });

    this.offerDisplayedItemsSubscription = createOfferService.offerDisplayedItems$.subscribe(items => {
      this.offer.displayedItems = items;
    });
  }

  offerContentSubscription: Subscription;
  offerDisplayedItemsSubscription: Subscription;



  offer: AddOffer;

  isDetailsCollapsed: boolean = false;
  isTimeFieldsCollapsed: boolean = true;
  isContentCollapsed: boolean = false;
  isDisplayCollapsed:boolean = false;

  private templateValueCapacity = { 1: 0, 6: 1, 4: 3, 5: 4, 3: 5, 2: 6 };

  get startDateString():string {
    return this.formatDate(this.offer.startDate);
  }

  set startDateString(value:string) {
    this.offer.startDate = new Date(value);
  }

  get endDateString():string {
    return this.formatDate(this.offer.endDate);
  }

  set endDateString(value:string) {
    this.offer.endDate = new Date(value);
  }

  incrementSku(sku:string): void {
    this.createOfferService.addSkuToContent(sku);
  }

  decrementSku(sku:string): void {
    console.log('decrementing sku ' + sku);
    this.createOfferService.removeSkuFromContent(sku);
  }

  incrementPrebuilt(unit:Unit): void {
    this.createOfferService.addPrebuiltUnit(unit);
  }

  decrementPrebuilt(unit:Unit): void {
    this.createOfferService.removePrebuiltUnit(unit);
  }

  formatDate(date:Date): string {
    let d = date.toLocaleDateString("en-CA");
    let t = date.toLocaleTimeString("en-GB");

    return d + 'T' + t;
  }

  ngOnInit() {
    
  }

}
