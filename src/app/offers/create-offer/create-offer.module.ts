import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateOfferRoutingModule } from './create-offer-routing.module';
import { OfferCreatePageComponent } from './pages/offer-create-page/offer-create-page.component';
import { OfferCatalogComponent } from './components/offer-catalog/offer-catalog.component';
import { OfferCreateComponent } from './components/offer-create/offer-create.component';
import { TechSearchPipe } from './components/offer-catalog/tech-search.pipe';
import { UnitFilterPipe } from './components/offer-catalog/unit-filter.pipe';
import { UnitSearchPipe } from './components/offer-catalog/unit-search.pipe';
import { CatalogFactionUnitItemComponent } from './components/catalog-faction-unit-item/catalog-faction-unit-item.component';
import { CatalogTechItemComponent } from './components/catalog-tech-item/catalog-tech-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CatalogUnitListComponent } from './components/catalog-unit-list/catalog-unit-list.component';
import { OfferWysiwygPageComponent } from './pages/offer-wysiwyg-page/offer-wysiwyg-page.component';
import { CatalogTechListComponent } from './components/catalog-tech-list/catalog-tech-list.component';
import { CatalogUniqueUnitListComponent } from './components/catalog-unique-unit-list/catalog-unique-unit-list.component';

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
    CatalogFactionUnitItemComponent,
    CatalogTechItemComponent,
    TechSearchPipe,
    UnitFilterPipe,
    UnitSearchPipe,
    CatalogUnitListComponent,
    OfferWysiwygPageComponent,
    CatalogTechListComponent,
    CatalogUniqueUnitListComponent
  ],
  exports: [
    OfferCreatePageComponent
  ]
})
export class CreateOfferModule { }
