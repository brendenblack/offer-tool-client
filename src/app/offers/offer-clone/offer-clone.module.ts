import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferCloneRoutingModule } from './offer-clone-routing.module';
import { ClonePageComponent } from './pages/clone-page.component';
import { OffersListComponent } from './components/offers-list/offers-list.component';
import { CloneOffersComponent } from './components/clone-offers/clone-offers.component';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    ClonePageComponent,
    CloneOffersComponent,
    OffersListComponent
  ],
  imports: [
    CommonModule,
    OfferCloneRoutingModule,
    FormsModule,
    ClipboardModule
  ]
})
export class OfferCloneModule { }
