import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDetailsPageComponent } from './offer-details-page.component';

describe('OfferDetailsPageComponent', () => {
  let component: OfferDetailsPageComponent;
  let fixture: ComponentFixture<OfferDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
