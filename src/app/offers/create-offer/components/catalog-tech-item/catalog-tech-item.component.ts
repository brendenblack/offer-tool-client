import { Component, OnInit, Input } from '@angular/core';
import { Tech } from 'src/app/core/models';
import { CreateOfferService } from '../../create-offer.service';

@Component({
  selector: 'app-catalog-tech-item',
  templateUrl: './catalog-tech-item.component.html',
  styleUrls: ['./catalog-tech-item.component.css']
})
export class CatalogTechItemComponent implements OnInit {

  constructor(private createService: CreateOfferService) { }

  @Input() tech: Tech;

  ngOnInit() {
  }

  addToOfferContent() {
    this.createService.addSkuToContent(this.tech.grantable.sku.code);
  }

  addToDisplayItems() {
    // TODO
  }

  get canAddToOfferContent(): boolean {
    return (this.tech.grantable != null && this.tech.grantable.sku != null);
  }

  get canAddToDisplayItems(): boolean {
    return (this.tech.grantable != null && this.tech.grantable.item != null);
  }

}
