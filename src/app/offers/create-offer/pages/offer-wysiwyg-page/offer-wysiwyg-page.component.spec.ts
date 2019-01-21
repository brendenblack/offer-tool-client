import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferWysiwygPageComponent } from './offer-wysiwyg-page.component';

describe('OfferWysiwygPageComponent', () => {
  let component: OfferWysiwygPageComponent;
  let fixture: ComponentFixture<OfferWysiwygPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferWysiwygPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferWysiwygPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
