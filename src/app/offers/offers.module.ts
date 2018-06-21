import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersPageComponent } from './offers-page/offers-page.component';
import { OffersRoutingModule } from './offers-routing.module';
import { OffersListComponent } from './offers-page/offers-list/offers-list.component';
import { OfferService } from '../core/services';
import { OfferDetailsPageComponent } from './offer-details-page/offer-details-page.component';

@NgModule({
  imports: [
    CommonModule,
    OffersRoutingModule
  ],
  declarations: [OffersPageComponent, OffersListComponent, OfferDetailsPageComponent],
  providers: [ OfferService ]
})
export class OffersModule { }
