import { UnitOfferContent } from '.';

export class OfferContent {
    // skus?: Map<string, number>;
    skus?: { [sku: string]: number };
    gold?: number;
    buildingUpdates?: Map<string, number>;
    units?: UnitOfferContent[];
}
