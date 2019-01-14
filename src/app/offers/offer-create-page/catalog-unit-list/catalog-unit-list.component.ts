import { Component, OnInit, Input } from '@angular/core';
import { Unit } from 'src/app/core/models';
import { CreateOfferService } from '../create-offer.service';

@Component({
  selector: 'app-catalog-unit-list',
  templateUrl: './catalog-unit-list.component.html',
  styleUrls: ['./catalog-unit-list.component.css']
})
export class CatalogUnitListComponent implements OnInit {

  constructor(private createService: CreateOfferService) { }

  ngOnInit() {
    if (this.unit.maxbuildableSku != null) {
      if (this.unit.maxbuildableSku.sku != null) {
        this.maxBuildableSku = this.unit.maxbuildableSku.sku.code;
      } else if (this.unit.maxbuildableSku.item != null) {
        this.maxBuildableSku = this.unit.maxbuildableSku.item.code;
      }
    }

    if (this.unit.unlockSku != null){
      if (this.unit.unlockSku.sku != null) {
        this.unlockSku = this.unit.unlockSku.sku.code;
      } else if (this.unit.unlockSku.item != null) {
        this.unlockSku = this.unit.unlockSku.item.code;
      }
    }
  }

  @Input() unit: Unit

  private maxBuildableSku: string;
  private unlockSku: string;

  get canAddUnlock(): boolean {
    return (this.unlockSku != null && this.unlockSku != undefined);
  }

  /** Indicates whether a given unit is able to add a prebuilt. Single use units are never eligible. */
  get canAddPrebuilt(): boolean {
    // TODO: what other rules govern whether we can -- or should -- grant
    // a prebuilt unit?
    return !this.unit.tags.some(t => t === 'SINGLE_USE');
  }

  get canAddMaxBuildable(): boolean {
    return (this.maxBuildableSku != null);
  }

  addUnlock() {
    this.createService.addSkuToContent(this.unlockSku);
  }

  addMaxBuildable() {
    this.createService.addSkuToContent(this.maxBuildableSku);
  }

  addPrebuilt() {
    this.createService.addPrebuiltUnit(this.unit);
  }

  tagToBackground(tag: string) {
    switch (tag) {
      case 'UNIQUE': {
        return '#ffd700;';
      }
      case 'CORPUS': {
        return '';
      }
      default: {
        return '';
      }
    }
  }
}
