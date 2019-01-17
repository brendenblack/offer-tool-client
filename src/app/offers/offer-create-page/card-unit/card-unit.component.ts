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

  @Input() unit: Unit;

  private maxBuildableSku: string;

  ngOnInit() {
    if (this.unit.maxbuildable != null) {
      if (this.unit.maxbuildable.sku != null) {
        this.maxBuildableSku = this.unit.maxbuildable.sku.code;
      } else if (this.unit.maxbuildable.item != null) {
        this.maxBuildableSku = this.unit.maxbuildable.item.code;
      }
    }
  }

  get canAddUnlock(): boolean {
    return (this.unit.unlock && this.unit.unlock.sku && this.unit.unlock.sku.code || null) != null;
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
