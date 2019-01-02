import { UnitOfferContent } from "./unit-offer-content.model";

export class OfferContent { 
    skus?: Map<string, number>;
    gold?: number;
    buildingUpdates?: Map<string, number>;
    units?: UnitOfferContent[];
    prebuiltUnits?: UnitOfferContent[];
}