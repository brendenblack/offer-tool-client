import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, OfferService, WcOffersService } from './services';
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
    WcOffersService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpHeadersInterceptor, multi: true }
  ]
})
export class CoreModule { }
