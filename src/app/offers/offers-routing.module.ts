import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffersPageComponent } from './offers-page/offers-page.component';
import { OfferDetailsPageComponent } from './offer-details-page/offer-details-page.component';
import { OffersCalendarPageComponent } from './offers-calendar-page/offers-calendar-page.component';

const routes: Routes = [
  {
    path: '',
    component: OffersPageComponent,
  },
  {
    path: 'offers/:id',
    component: OfferDetailsPageComponent
  },
  {
    path: 'calendar',
    component: OffersCalendarPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersRoutingModule {}
