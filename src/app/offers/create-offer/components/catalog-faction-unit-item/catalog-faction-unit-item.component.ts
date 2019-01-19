import { Component, OnInit, Input } from '@angular/core';
import { Unit } from 'src/app/core/models';
import { CreateOfferService } from '../../create-offer.service';

@Component({
  selector: 'app-catalog-faction-unit-item',
  templateUrl: './catalog-faction-unit-item.component.html',
  styleUrls: ['./catalog-faction-unit-item.component.css']
})
export class CatalogFactionUnitItemComponent implements OnInit {

  constructor(private createService: CreateOfferService) { }

  @Input()

  unit: Unit;
  private maxBuildableSku: string;
  private canAddMaxBuildable: boolean;
  private canAddUnlock: boolean;
  private unlockSku: string;
  private maxBuildableItem: string;
  private canDisplayMaxBuildable: boolean;
  private unlockItem: string;
  private canDisplayUnlock: boolean;
  private canAddPrebuilt: boolean;

  ngOnInit() {
    if (this.unit.maxbuildable != null) {
      if (this.unit.maxbuildable.sku != null) {
        this.maxBuildableSku = this.unit.maxbuildable.sku.code;
      }
      if (this.unit.maxbuildable.item != null) {
        this.maxBuildableItem = this.unit.maxbuildable.item.code;
        if (!this.unit.maxbuildable) {
          // this case relies on how some maxbuildable units do not exist in sku definitions,
          // but will still work to grant the unit... sometimes.
          this.maxBuildableSku = this.unit.maxbuildable.item.code;
        }
      }
    }
    this.canAddMaxBuildable = this.maxBuildableSku != null;
    this.canDisplayMaxBuildable = this.maxBuildableItem != null;
    if (this.unit.unlock !== null) {
      if (this.unit.unlock.sku != null) {
        this.unlockSku = this.unit.unlock.sku.code;
      } else if (this.unit.unlock.item != null) {
        this.unlockSku = this.unit.unlock.item.code;
      }

      if (this.unit.unlock.item != null) {
        this.unlockItem = this.unit.unlock.item.code;
      }
    }
    this.canAddUnlock = (this.unlockSku != null && this.unlockSku !== undefined);
    this.canDisplayUnlock = this.unlockItem != null;
    // TODO: what other rules govern whether we can -- or should -- grant
    // a prebuilt unit?
    this.canAddPrebuilt = !this.unit.tags.some(t => t === 'SINGLE_USE');
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

  addDisplay(itemCode: string): void {
    this.createService.addItemToDisplay(itemCode);
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
