import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogUniqueUnitListComponent } from './catalog-unique-unit-list.component';

describe('CatalogUniqueUnitListComponent', () => {
  let component: CatalogUniqueUnitListComponent;
  let fixture: ComponentFixture<CatalogUniqueUnitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogUniqueUnitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogUniqueUnitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
