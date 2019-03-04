import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogTechListComponent } from './catalog-tech-list.component';

describe('CatalogTechListComponent', () => {
  let component: CatalogTechListComponent;
  let fixture: ComponentFixture<CatalogTechListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogTechListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogTechListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
