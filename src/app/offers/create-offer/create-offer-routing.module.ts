import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferCreatePageComponent } from './pages/offer-create-page/offer-create-page.component';

const routes: Routes = [
  {
    path: '',
    component: OfferCreatePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateOfferRoutingModule { }
