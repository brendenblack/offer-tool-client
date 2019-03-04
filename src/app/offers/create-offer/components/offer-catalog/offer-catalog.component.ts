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

  constructor() { }

  @Input() catalog: OfferCatalog;

  ngOnInit() {
  }
}
