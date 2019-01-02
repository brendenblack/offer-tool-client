import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject }    from 'rxjs';
import { OfferContent, OfferDisplay, UnitOfferContent, Unit } from 'src/app/core/models';
import { stringify } from '@angular/compiler/src/util';
 
@Injectable()
export class CreateOfferService {

    private unitTypes = new Subject<number>();

    unitTypes$ = this.unitTypes.asObservable();

    private offerContent = new OfferContent();
    private offerContentSubject = new BehaviorSubject<OfferContent>(this.offerContent);
    offerContent$ = this.offerContentSubject.asObservable();



    private offerDisplayedItems = new Subject<OfferDisplay>();
    offerDisplayedItems$ = this.offerDisplayedItems.asObservable();

    addUnit(type:number) {
        this.unitTypes.next(type);
    }

    addPrebuiltUnit(unit:Unit) {
        let offer = this.offerContent;

        if (offer.prebuiltUnits) {
            let existingUnitIndex = offer.prebuiltUnits.findIndex(u => u.type == unit.type);
            if (existingUnitIndex >= 0) {
                offer.prebuiltUnits[existingUnitIndex].amount = this.offerContent.prebuiltUnits[existingUnitIndex].amount + 1;
            } else {
                let u = new UnitOfferContent();
                u.type = unit.type;
                u.name = unit.name; 
                u.level = 1;
                u.amount = 1;
                offer.prebuiltUnits.push(u);
            }
        } else  {
            offer.prebuiltUnits = [];
            let u = new UnitOfferContent();
            u.type = unit.type;
            u.name = unit.name; 
            u.level = 1;
            u.amount = 1;
            offer.prebuiltUnits.push(u);
        }

        this.offerContent = offer;
        this.offerContentSubject.next(this.offerContent);
    }

    removePrebuiltUnit(unit:Unit) {
        let offer = this.offerContent;

        if (offer.prebuiltUnits) {
            let existingUnitIndex = offer.prebuiltUnits.findIndex(u => u.type == unit.type);
            if (existingUnitIndex >= 0) {
                if (offer.prebuiltUnits[existingUnitIndex].amount == 1) {
                    offer.prebuiltUnits.splice(existingUnitIndex, 1);
                } else if (offer.prebuiltUnits[existingUnitIndex].amount > 1) {
                    offer.prebuiltUnits[existingUnitIndex].amount = this.offerContent.prebuiltUnits[existingUnitIndex].amount - 1;
                }
            }

            this.offerContent = offer;
            this.offerContentSubject.next(this.offerContent);
        }
    }

    addSkuToContent(sku:string): void {
        let offer = this.offerContent;
        
        if (offer.skus && offer.skus.has(sku)) {
            let currentQuantity = offer.skus.get(sku)
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

    removeSkuFromContent(sku:string): void { 
        let offer = this.offerContent;
        
        if (offer.skus && offer.skus.has(sku)) {
            let currentQuantity = offer.skus.get(sku)
            if (currentQuantity <= 1) {
                offer.skus.delete(sku);
            } else {
                offer.skus.set(sku, currentQuantity - 1);
            }
        }

        this.offerContent = offer;
        this.offerContentSubject.next(this.offerContent);
    }

    removeUnitUnlockFromContent(sku:String): void {
    }
}
