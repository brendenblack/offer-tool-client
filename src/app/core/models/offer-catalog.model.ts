export class OfferCatalog {
  factionUnits: Unit[] = [];
  tech: Tech[] = [];
}

export class Sku {
    code: string;
}

export class Item {
    code: string;
    title: string;
    description: string;
    storeIconName: string;
}

export class GrantableItem {
    sku: Sku;
    item: Item;
}

export class Unit {
    type: number;
    name: string;
    description: string;
    unlock: GrantableItem;
    maxbuildable: GrantableItem;
    tags: string[] = [];
}

export class Tech {
    categoryId: number;
    name: string;
    description: string;
    limit: number;
    slot: string;
    grantable: GrantableItem;
}
