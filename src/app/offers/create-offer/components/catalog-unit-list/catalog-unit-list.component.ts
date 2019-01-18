import { Component, OnInit, Input } from '@angular/core';
import { Unit } from 'src/app/core/models';
import { CreateOfferService } from '../../create-offer.service';

@Component({
  selector: 'app-catalog-unit-list',
  templateUrl: './catalog-unit-list.component.html',
  styleUrls: ['./catalog-unit-list.component.css']
})
export class CatalogUnitListComponent implements OnInit {

  constructor(private createOfferService: CreateOfferService) { }

  @Input() units: Unit[];
  private unitTags: Set<string> = new Set();

  private _isShowSurvivors = true;
  get isShowSurvivors(): boolean {
    return this._isShowSurvivors;
  }
  set isShowSurvivors(val: boolean) {
    this._isShowSurvivors = val;
  }

  private _isShowCorpus = true;
  get isShowCorpus(): boolean {
    return this._isShowCorpus;
  }
  set isShowCorpus(val: boolean) {
    this._isShowCorpus = val;
  }

  private _isShowSentinels = true;
  get isShowSentinels(): boolean {
    return this._isShowSentinels;
  }
  set isShowSentinels(val: boolean) {
    this._isShowSentinels = val;
  }

  ngOnInit() {
    this.units.forEach(u => u.tags.forEach(t => this.unitTags.add(t)));
  }

}
