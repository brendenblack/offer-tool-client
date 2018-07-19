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
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { OffersCalendarPageComponent } from './offers-calendar-page/offers-calendar-page.component';
import { OffersCalendarComponent } from './offers-calendar-page/offers-calendar/offers-calendar.component';
import { CalendarCommonModule } from 'angular-calendar/modules/common';
import { CalendarMonthModule } from 'angular-calendar/modules/month';
import { CalendarModule } from '../../../node_modules/angular-calendar';

@NgModule({
  imports: [
    CommonModule,
    OffersRoutingModule,
    Ng2SmartTableModule,
    NgbModule,
    FormsModule,
    ClipboardModule,
    CalendarModule.forRoot()
  ],
  declarations: [
    OffersPageComponent,
    OffersListComponent,
    OfferDetailsPageComponent,
    CloneOffersComponent,
    OffersCalendarPageComponent,
    OffersCalendarComponent],
  providers: [ OfferService ]
})
export class OffersModule { }
