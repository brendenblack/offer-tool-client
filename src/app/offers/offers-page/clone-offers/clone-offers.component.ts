import { Component, OnInit, Input } from '@angular/core';
import { Offer } from '../../../core/models';
import { OfferService } from '../../../core/services';

@Component({
  selector: 'app-clone-offers',
  templateUrl: './clone-offers.component.html',
  styleUrls: ['./clone-offers.component.css']
})
export class CloneOffersComponent implements OnInit {

  constructor(private offerService: OfferService) { }

  @Input() offers: Offer[] = [];

  ngOnInit() {
  }

}
