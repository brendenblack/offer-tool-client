export class OfferCatalog {
  units: Unit[];
}

export interface Sku {
    code: string;
}

export interface Item {
    code: string;
    title: string;
    description: string;
    storeIconName: string;
    storeIconNameSmall: string;
}

export interface GrantableItem {
    sku: Sku;
    item: Item;
}

export class Unit {
    type: number;
    name: string;
    description: string;
    unlockSku: GrantableItem;
    maxbuildableSku: GrantableItem;
    tags: string[] = [];
}
