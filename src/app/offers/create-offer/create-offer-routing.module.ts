import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferCreatePageComponent } from './pages/offer-create-page/offer-create-page.component';
import { OfferWysiwygPageComponent } from './pages/offer-wysiwyg-page/offer-wysiwyg-page.component';

const routes: Routes = [
  {
    path: 'wysiwyg',
    component: OfferWysiwygPageComponent
  },
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
