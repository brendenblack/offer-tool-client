import { Component, OnInit, Input } from '@angular/core';
import { Tech } from 'src/app/core/models';
import { CreateOfferService } from '../create-offer.service';

@Component({
  selector: 'app-catalog-tech-list',
  templateUrl: './catalog-tech-list.component.html',
  styleUrls: ['./catalog-tech-list.component.css']
})
export class CatalogTechListComponent implements OnInit {

  constructor(private createService: CreateOfferService) { }

  @Input() tech: Tech;
  
  ngOnInit() {
  }

  addToOfferContent() {
    this.createService.addSkuToContent(this.tech.grantable.sku.code);
  }

  addToDisplayItems() {
    
  }

  get canAddToOfferContent(): boolean {
    return (this.tech.grantable != null && this.tech.grantable.sku != null);
  }

  get canAddToDisplayItems(): boolean {
    return (this.tech.grantable != null && this.tech.grantable.item != null);
  }

}
