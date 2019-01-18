import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferCreatePageComponent } from './offer-create-page.component';

describe('OfferCreatePageComponent', () => {
  let component: OfferCreatePageComponent;
  let fixture: ComponentFixture<OfferCreatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferCreatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
