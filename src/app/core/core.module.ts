import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, OfferService } from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ApiService,
    OfferService
  ]
})
export class CoreModule { }
