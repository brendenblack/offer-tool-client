import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-offer-details-page',
  templateUrl: './offer-details-page.component.html',
  styleUrls: ['./offer-details-page.component.css']
})
export class OfferDetailsPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  private offerId: number;

  ngOnInit() {
    this.offerId = +this.route.snapshot.paramMap.get('id');
    console.log("Route activated with id " + this.offerId);
    // this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //   {
    //     this.offerId = +params.get('id');
    //     //this.service.getHero(params.get('id')))
    //   }));
  }

}
