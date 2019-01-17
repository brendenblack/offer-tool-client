import { Component, OnInit, Input } from '@angular/core';
import { CreateOfferService } from '../create-offer.service';
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
  private unitTags: Set<string> = new Set();

  displayMode: String = 'card';

  private _isShowSingleUse = false;
  get isShowSingleUse(): boolean {
    return this._isShowSingleUse;
  }
  set isShowSingleUse(val: boolean) {
    this._isShowSingleUse = val;
  }

  private _isShowUnique = true;
  get isShowUnique(): boolean {
    return this._isShowUnique;
  }
  set isShowUnique(val: boolean) {
    this._isShowUnique = val;
  }

  private _isShowHeroes = true;
  get isShowHeroes(): boolean {
    return this._isShowHeroes;
  }
  set isShowHeroes(val: boolean) {
    this._isShowHeroes = val;
  }

  get units(): Unit[] {
    if (this.catalog) {
      return this.catalog.factionUnits.filter((u) => {
        return !u.tags.find(t => t === 'SINGLE_USE');
      }).sort((a, b) => a.type < b.type ? 1 : a.type > b.type ? -1 : 0);
    } else {
      return [];
    }
  }

  get tech(): Tech[] {
    if (this.catalog) {
      return this.catalog.tech;
    } else {
      return [];
    }
  }

  ngOnInit() {
    this.catalog.factionUnits.forEach(u => u.tags.forEach(t => this.unitTags.add(t)));
  }


  addUnit() {
    this.createOfferService.addUnit(251);
  }

  setDisplayMode(displayMode: String) {
    this.displayMode = displayMode;
  }
}
