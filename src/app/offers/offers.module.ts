import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersPageComponent } from './offers-page/offers-page.component';
import { OffersRoutingModule } from './offers-routing.module';
import { OffersListComponent } from './offers-page/offers-list/offers-list.component';
import { OfferService } from '../core/services';
import { OfferDetailsPageComponent } from './offer-details-page/offer-details-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CloneOffersComponent } from './offers-page/clone-offers/clone-offers.component';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { OffersCalendarPageComponent } from './offers-calendar-page/offers-calendar-page.component';
import { OffersCalendarComponent } from './offers-calendar-page/offers-calendar/offers-calendar.component';
import { OfferCreatePageComponent } from './offer-create-page/offer-create-page.component';
import { OfferCatalogComponent } from './offer-create-page/offer-catalog/offer-catalog.component';
import { OfferCreateComponent } from './offer-create-page/offer-create/offer-create.component';
import { CardUnitComponent } from './offer-create-page/card-unit/card-unit.component';
import { SharedModule } from '../shared/shared.module';
import { CatalogUnitListComponent } from './offer-create-page/catalog-unit-list/catalog-unit-list.component';

@NgModule({
  imports: [
    CommonModule,
    OffersRoutingModule,
    NgbModule,
    FormsModule,
    ClipboardModule,
    SharedModule
  ],
  declarations: [
    OffersPageComponent,
    OffersListComponent,
    OfferDetailsPageComponent,
    CloneOffersComponent,
    OffersCalendarPageComponent,
    OffersCalendarComponent,
    OfferCreatePageComponent,
    OfferCatalogComponent,
    OfferCreateComponent,
    CardUnitComponent,
    CatalogUnitListComponent],
  providers: [ OfferService ]
})
export class OffersModule { }
