import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { OfferContent, OfferDisplayItem, UnitOfferContent, Unit, Item } from 'src/app/core/models';
import { stringify } from '@angular/compiler/src/util';

@Injectable()
export class CreateOfferService {

    private offerContent = new OfferContent();
    private offerContentSubject = new BehaviorSubject<OfferContent>(this.offerContent);
    offerContent$ = this.offerContentSubject.asObservable();


    private displayedItems: OfferDisplayItem[] = [];
    private displayedItemsSubject = new BehaviorSubject<OfferDisplayItem[]>(this.displayedItems);
    offerDisplayedItems$ = this.displayedItemsSubject.asObservable();

    addPrebuiltUnit(unit: Unit) {
        let offer = this.offerContent;

        if (offer.units) {
            const existingUnitIndex = offer.units.findIndex(u => u.type === unit.type);
            if (existingUnitIndex >= 0) {
                offer.units[existingUnitIndex].amount = this.offerContent.units[existingUnitIndex].amount + 1;
            } else {
                let u = new UnitOfferContent();
                u.type = unit.type;
                u.name = unit.name;
                u.level = 1;
                u.amount = 1;
                offer.units.push(u);
            }
        } else  {
            offer.units = [];
            let u = new UnitOfferContent();
            u.type = unit.type;
            u.name = unit.name;
            u.level = 1;
            u.amount = 1;
            offer.units.push(u);
        }

        this.offerContent = offer;
        this.offerContentSubject.next(this.offerContent);
    }

    removePrebuiltUnit(unit: Unit) {
        let offer = this.offerContent;

        if (offer.units) {
            let existingUnitIndex = offer.units.findIndex(u => u.type === unit.type);
            if (existingUnitIndex >= 0) {
                if (offer.units[existingUnitIndex].amount === 1) {
                    offer.units.splice(existingUnitIndex, 1);
                } else if (offer.units[existingUnitIndex].amount > 1) {
                    offer.units[existingUnitIndex].amount = this.offerContent.units[existingUnitIndex].amount - 1;
                }
            }

            this.offerContent = offer;
            this.offerContentSubject.next(this.offerContent);
        }
    }

    addSkuToContent(sku: string): void {
        let offer = this.offerContent;

        if (!offer.skulist) {
            offer.skulist = { };
        }
        if (offer.skulist[sku]) {
            offer.skulist[sku] = offer.skulist[sku] + 1;
        } else {
            offer.skulist[sku] = 1;
        }

        console.log(offer.skulist);

        if (offer.skus && offer.skus.has(sku)) {
            let currentQuantity = offer.skus.get(sku);
            offer.skus.set(sku, currentQuantity + 1);
        } else if (offer.skus && !offer.skus.has(sku)) {
            offer.skus.set(sku, 1);
        } else {
            offer.skus = new  Map<string, number>();
            offer.skus.set(sku, 1);
        }

        this.offerContent = offer;
        this.offerContentSubject.next(this.offerContent);
    }

    removeSkuFromContent(sku: string): void {
        let offer = this.offerContent;

        if (offer.skus && offer.skus.has(sku)) {
            let currentQuantity = offer.skus.get(sku);
            if (currentQuantity <= 1) {
                offer.skus.delete(sku);
            } else {
                offer.skus.set(sku, currentQuantity - 1);
            }
        }

        this.offerContent = offer;
        this.offerContentSubject.next(this.offerContent);
    }

    addItemToDisplay(itemCode: string): void {
        let display = this.displayedItems;
        let existingItem = display.find(i => i.item === itemCode);
        if (existingItem) {
            console.log(`incrementing existing item ${existingItem.item}`);
            existingItem.amount += 1;
        } else {
            console.log(`adding new item ${itemCode}`);
            let item: OfferDisplayItem = { item: itemCode, amount: 1, order: display.length + 1 };
            console.log(item);
            display.push(item);
        }

        this.displayedItems = display;
        this.displayedItemsSubject.next(this.displayedItems);
    }

    removeItemFromDisplay(itemCode: string): void {
        let display = this.displayedItems;
        let existingItem = display.find(i => i.item === itemCode);
        if (existingItem) {
            if (existingItem.amount === 1) {
                let index = display.indexOf(existingItem);
                display.splice(index, 1);
            } else {
                existingItem.amount -= 1;
            }
        }

        this.displayedItems = display;
        this.displayedItemsSubject.next(this.displayedItems);
    }

}
