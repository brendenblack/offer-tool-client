import { Component, OnInit, Input } from '@angular/core';
import { Unit } from 'src/app/core/models/offer-catalog.model';
import { CreateOfferService } from '../create-offer.service';

@Component({
  selector: 'app-card-unit',
  templateUrl: './card-unit.component.html',
  styleUrls: ['./card-unit.component.css']
})
export class CardUnitComponent implements OnInit {

  constructor(private createService: CreateOfferService) { }

  ngOnInit() {
    if (this.unit.maxbuildableSku != null) {
      if (this.unit.maxbuildableSku.sku != null) {
        this.maxBuildableSku = this.unit.maxbuildableSku.sku.code;
      } else if (this.unit.maxbuildableSku.item != null) {
        this.maxBuildableSku = this.unit.maxbuildableSku.item.code;
      }
    }
  }

  @Input() unit: Unit

  private maxBuildableSku: string;

  get canAddUnlock(): boolean {
    return (this.unit.unlockSku && this.unit.unlockSku.sku && this.unit.unlockSku.sku.code || null) != null;
  }

  get canAddPrebuilt(): boolean {
    return (this.maxBuildableSku) != null;
  }

  get canAddMaxBuildable(): boolean {
    return (this.maxBuildableSku != null);
  }

  addUnlock() {
    console.log('adding unlock for ' + this.unit.type);
  }

  addMaxBuildable() {
    console.log('adding maxbuildable for ' + this.unit.type); 
  }

  addPrebuilt() {
    console.log('adding prebuilt for ' + this.unit.type);
  }

}
