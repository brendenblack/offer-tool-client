import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUnitComponent } from './card-unit.component';

describe('CardUnitComponent', () => {
  let component: CardUnitComponent;
  let fixture: ComponentFixture<CardUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
