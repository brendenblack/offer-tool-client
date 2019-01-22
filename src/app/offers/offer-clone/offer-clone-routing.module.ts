import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClonePageComponent } from './pages/clone-page.component';

const routes: Routes = [
  {
    path: '',
    component: ClonePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferCloneRoutingModule { }
