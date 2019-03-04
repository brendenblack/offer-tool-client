import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/core/services/offer.service';
import { OfferCatalog, Tech, GrantableItem, Sku, Item, Unit } from 'src/app/core/models/offer-catalog.model';
import { CreateOfferService } from '../../create-offer.service';

@Component({
  selector: 'app-offer-create-page',
  templateUrl: './offer-create-page.component.html',
  styleUrls: ['./offer-create-page.component.css'],
  providers: [CreateOfferService]
})
export class OfferCreatePageComponent implements OnInit {

  constructor(private createOfferService: CreateOfferService, private offersService: OfferService) { }

  private catalog: OfferCatalog;
  private unitTags: Set<string>;

  ngOnInit() {
    this.offersService.getCatalog().subscribe(data => {
      this.catalog = data;
    });
  }

}
