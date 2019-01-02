import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/core/services/offer.service';
import { OfferCatalog } from 'src/app/core/models/offer-catalog.model';
import { CreateOfferService } from 'src/app/offers/offer-create-page/create-offer.service';

@Component({
  selector: 'app-offer-create-page',
  templateUrl: './offer-create-page.component.html',
  styleUrls: ['./offer-create-page.component.css'],
  providers: [CreateOfferService]
})
export class OfferCreatePageComponent implements OnInit {

  constructor(private createOfferService:CreateOfferService) { }



  ngOnInit() {
    
  }

}
