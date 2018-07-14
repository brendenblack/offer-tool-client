import { OffersCalendarPageModule } from './offers-calendar-page.module';

describe('OffersCalendarPageModule', () => {
  let offersCalendarPageModule: OffersCalendarPageModule;

  beforeEach(() => {
    offersCalendarPageModule = new OffersCalendarPageModule();
  });

  it('should create an instance', () => {
    expect(offersCalendarPageModule).toBeTruthy();
  });
});
