import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateOfferRoutingModule } from './create-offer-routing.module';
import { OfferCreatePageComponent } from './pages/offer-create-page/offer-create-page.component';
import { OfferCatalogComponent } from './components/offer-catalog/offer-catalog.component';
import { OfferCreateComponent } from './components/offer-create/offer-create.component';
import { CardUnitComponent } from './components/card-unit/card-unit.component';
import { TechSearchPipe } from './components/offer-catalog/tech-search.pipe';
import { UnitFilterPipe } from './components/offer-catalog/unit-filter.pipe';
import { UnitSearchPipe } from './components/offer-catalog/unit-search.pipe';
import { CatalogFactionUnitItemComponent } from './components/catalog-faction-unit-item/catalog-faction-unit-item.component';
import { CatalogTechItemComponent } from './components/catalog-tech-item/catalog-tech-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CatalogUnitListComponent } from './components/catalog-unit-list/catalog-unit-list.component';

@NgModule({
  imports: [
    CommonModule,
    CreateOfferRoutingModule,
    NgbModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    OfferCreatePageComponent,
    OfferCatalogComponent,
    OfferCreateComponent,
    CardUnitComponent,
    CatalogFactionUnitItemComponent,
    CatalogTechItemComponent,
    TechSearchPipe,
    UnitFilterPipe,
    UnitSearchPipe,
    CatalogUnitListComponent
  ],
  exports: [
    OfferCreatePageComponent
  ]
})
export class CreateOfferModule { }