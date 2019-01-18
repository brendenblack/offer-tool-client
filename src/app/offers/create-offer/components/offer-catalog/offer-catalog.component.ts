import { Component, OnInit, Input } from '@angular/core';
import { CreateOfferService } from '../../create-offer.service';
import { OfferService } from 'src/app/core/services/offer.service';
import { OfferCatalog, Unit, Tech } from 'src/app/core/models/offer-catalog.model';
import { TechSearchPipe } from './tech-search.pipe';

@Component({
  selector: 'app-offer-catalog',
  templateUrl: './offer-catalog.component.html',
  styleUrls: ['./offer-catalog.component.css']
})
export class OfferCatalogComponent implements OnInit {

  constructor(private createOfferService: CreateOfferService) { }

  @Input() catalog: OfferCatalog;


  // get units(): Unit[] {
  //   if (this.catalog) {
  //     return this.catalog.factionUnits.filter((u) => {
  //       return !u.tags.find(t => t === 'SINGLE_USE');
  //     }).sort((a, b) => a.type < b.type ? 1 : a.type > b.type ? -1 : 0);
  //   } else {
  //     return [];
  //   }
  // }

  get tech(): Tech[] {
    if (this.catalog) {
      return this.catalog.tech;
    } else {
      return [];
    }
  }

  ngOnInit() {
  }

  addUnit() {
    this.createOfferService.addUnit(251);
  }
}
