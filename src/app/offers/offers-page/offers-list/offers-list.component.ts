import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../../core/services';
import { Offer } from '../../../core/models';

@Component({
  selector: 'offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {

  constructor(private offersService: OfferService) { }

  ngOnInit() {
    this.getOffers();
  }

  private offers:Offer[] = [];
  private onlyActive: boolean = false;

  getOffers() {
    this.offersService.getOffers(this.onlyActive).subscribe(data => {
      console.log(data);
      this.offers = data;
    
    });
  }

}
