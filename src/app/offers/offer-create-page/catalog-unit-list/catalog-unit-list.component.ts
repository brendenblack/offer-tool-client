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

  @Input() unit: Unit;
  private maxBuildableSku: string;
  private canAddMaxBuildable: boolean;
  private canAddUnlock: boolean;
  private unlockSku: string;
  private maxBuildableItem: string;
  private canDisplayMaxBuildable: boolean;
  private unlockItem: string;
  private canDisplayUnlock: boolean;


  ngOnInit() {
    if (this.unit.maxbuildableSku != null) {
      if (this.unit.maxbuildableSku.sku != null) {
        this.maxBuildableSku = this.unit.maxbuildableSku.sku.code;
      } 

      if (this.unit.maxbuildableSku.item != null) {
        this.maxBuildableItem = this.unit.maxbuildableSku.item.code;
        if (!this.unit.maxbuildableSku) {
          // this case relies on how some maxbuildable units do not exist in sku definitions,
        // but will still work to grant the unit... sometimes.
          this.maxBuildableSku = this.unit.maxbuildableSku.item.code;
        }
      }
    }

    this.canAddMaxBuildable = this.maxBuildableSku != null;
    this.canDisplayMaxBuildable = this.maxBuildableItem != null;

    if (this.unit.unlockSku != null) {
      if (this.unit.unlockSku.sku != null) {
        this.unlockSku = this.unit.unlockSku.sku.code;
      } else if (this.unit.unlockSku.item != null) {
        this.unlockSku = this.unit.unlockSku.item.code;
        this.unlockItem = this.unit.unlockSku.item.code;
      }
    }

    this.canAddUnlock = (this.unlockSku != null && this.unlockSku !== undefined);
    this.canDisplayUnlock = this.unlockItem != null;

  }


  /** Indicates whether a given unit is able to add a prebuilt. Single use units are never eligible. */
  get canAddPrebuilt(): boolean {
    // TODO: what other rules govern whether we can -- or should -- grant
    // a prebuilt unit?
    return !this.unit.tags.some(t => t === 'SINGLE_USE');
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
