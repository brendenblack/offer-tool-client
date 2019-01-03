import { Component, OnInit } from '@angular/core';
import { CreateOfferService } from '../create-offer.service';
import { OfferService } from 'src/app/core/services/offer.service';
import { OfferCatalog, Unit } from 'src/app/core/models/offer-catalog.model';

@Component({
  selector: 'app-offer-catalog',
  templateUrl: './offer-catalog.component.html',
  styleUrls: ['./offer-catalog.component.css']
})
export class OfferCatalogComponent implements OnInit {

  constructor(private offersService: OfferService, private createOfferService:CreateOfferService) { }

  private catalog: OfferCatalog

  displayMode: String = 'card';

  unitTags:Set<string> = new Set();

  get units():Unit[] {
    return this.catalog.units.filter((u) => {
      return !u.tags.find(t => t === "SINGLE_USE");
    }).sort((a,b) => a.type < b.type ? 1 : a.type > b.type ? -1 : 0);
  }
  
  ngOnInit() {
    // this.offersService.getCatalog().subscribe(data => {
    //   this.catalog = data;

    //   this.catalog.units.forEach(u => u.tags.forEach(t => this.unitTags.add(t)));
    //   console.log(this.unitTags);
    // });
  }


  addUnit() {
    this.createOfferService.addUnit(251);
  }

  setDisplayMode(displayMode: String) {
    this.displayMode = displayMode;
  }
}
