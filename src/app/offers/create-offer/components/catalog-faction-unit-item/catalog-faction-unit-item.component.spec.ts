import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogFactionUnitItemComponent } from './catalog-faction-unit-item.component';

describe('CatalogUnitListComponent', () => {
  let component: CatalogFactionUnitItemComponent;
  let fixture: ComponentFixture<CatalogFactionUnitItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogFactionUnitItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogFactionUnitItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
