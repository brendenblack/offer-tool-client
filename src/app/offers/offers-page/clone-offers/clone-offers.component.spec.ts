import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneOffersComponent } from './clone-offers.component';

describe('CloneOffersComponent', () => {
  let component: CloneOffersComponent;
  let fixture: ComponentFixture<CloneOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloneOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
