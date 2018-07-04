import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersPageComponent } from './offers-page/offers-page.component';
import { OffersRoutingModule } from './offers-routing.module';
import { OffersListComponent } from './offers-page/offers-list/offers-list.component';
import { OfferService } from '../core/services';
import { OfferDetailsPageComponent } from './offer-details-page/offer-details-page.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CloneOffersComponent } from './offers-page/clone-offers/clone-offers.component';

@NgModule({
  imports: [
    CommonModule,
    OffersRoutingModule,
    Ng2SmartTableModule,
    NgbModule
  ],
  declarations: [
    OffersPageComponent,
    OffersListComponent,
    OfferDetailsPageComponent,
    CloneOffersComponent],
  providers: [ OfferService ]
})
export class OffersModule { }
