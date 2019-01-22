import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersRoutingModule } from './offers-routing.module';
import { OfferService } from '../core/services';
import { OfferDetailsPageComponent } from './offer-details-page/offer-details-page.component';
import { ClipboardModule } from 'ngx-clipboard';
import { OffersCalendarPageComponent } from './offers-calendar-page/offers-calendar-page.component';
import { OffersCalendarComponent } from './offers-calendar-page/offers-calendar/offers-calendar.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { OfferPageComponent } from './offer-page/offer-page.component';

@NgModule({
  imports: [
    CommonModule,
    OffersRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    OfferDetailsPageComponent,
    OffersCalendarPageComponent,
    OffersCalendarComponent,
    OfferPageComponent
  ],
  providers: [ OfferService ]
})
export class OffersModule { }
