import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogTechItemComponent } from './catalog-tech-item.component';

describe('CatalogTechListComponent', () => {
  let component: CatalogTechItemComponent;
  let fixture: ComponentFixture<CatalogTechItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogTechItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogTechItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
