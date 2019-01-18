import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogUnitListComponent } from './catalog-unit-list.component';

describe('CatalogUnitListComponent', () => {
  let component: CatalogUnitListComponent;
  let fixture: ComponentFixture<CatalogUnitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogUnitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogUnitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
