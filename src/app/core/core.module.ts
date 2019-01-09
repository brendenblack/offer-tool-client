import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, OfferService, WcOffersApiService } from './services';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpHeadersInterceptor } from './interceptors';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ApiService,
    OfferService,
    WcOffersApiService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpHeadersInterceptor, multi: true }
  ]
})
export class CoreModule { }
