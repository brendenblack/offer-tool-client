import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClonePageComponent } from './clone-page.component';

describe('OffersPageComponent', () => {
  let component: ClonePageComponent;
  let fixture: ComponentFixture<ClonePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClonePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClonePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
