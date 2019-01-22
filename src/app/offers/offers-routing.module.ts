import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClonePageComponent } from './offer-clone/pages/clone-page.component';
import { OfferDetailsPageComponent } from './offer-details-page/offer-details-page.component';
import { OffersCalendarPageComponent } from './offers-calendar-page/offers-calendar-page.component';
import { OfferPageComponent } from './offer-page/offer-page.component';

const routes: Routes = [
  {
    path: 'create',
    loadChildren: './create-offer/create-offer.module#CreateOfferModule'
  },
  {
    path: 'clone',
    loadChildren: './offer-clone/offer-clone.module#OfferCloneModule'
  },
  {
  path: '',
  component: OfferPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersRoutingModule {}
