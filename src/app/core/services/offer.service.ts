import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';
import { OfferSummary, Offer, OfferDisplayOptions, OfferEntity, CreateOfferCommand } from '../models';
import { map } from 'rxjs/operators';
import { OfferCatalog } from '../models/offer-catalog.model';
import { WcOffersApiService } from './wc-offers-api.service';

@Injectable()
export class OfferService {
    constructor(private apiService: ApiService, private wcOffersApiService: WcOffersApiService) {}

    getAllOffers(active: boolean = false): Observable<OfferSummary[]> {
        return this.apiService.get(`/offers?active=${active}`).pipe(map(data => {
            return data.offers;
        }));
    }

    mapOfferToEntity(offer: Offer): OfferEntity {
        let entity = new OfferEntity();
        entity.id = offer.id;
        entity.offerCode = offer.code;
        entity.title = offer.title;
        entity.description = offer.description;
        entity.iconTitle = offer.iconTitle;
        entity.iconDescription = offer.iconDescription;
        entity.cost = offer.cost;
        entity.fullCost = offer.fullCost;
        entity.costSku = offer.costSku;
        entity.startTime = offer.startDate.getTime() / 1000;
        entity.endTime = offer.endDate.getTime() / 1000;
        entity.duration = offer.duration;
        entity.modifiedTime = new Date().getTime() / 1000;

        return entity;
    }

    getCloneSql(offers: Map<number, String>): Observable<String> {
        const command = new CloneOfferCommand();
        offers.forEach((code: String, id: number) => {
            command.addTarget(id, code);
        });
        console.log(command);
        return this.apiService.put('/offers/clone', command).pipe(map(data => {
            return data.sql;
        }));
    }

    getOffers(ids: number[]): Observable<OfferCloneSkeleton[]> {
        return this.apiService.get(`/offers/clone?ids=${ids.join(',')}`).pipe(map((data: OfferCloneDetailsResponse) => {
            console.log('clone details');
            console.log(data);
            // TODO: mapping like this probably won't work
            return data.offers;
        }));
    }

    getCatalog(): Observable<OfferCatalog> {
        return this.wcOffersApiService.get(`/catalog`).pipe(map(data => {
            console.log(data);
            return data;
        }));
    }

    createOffer(offer: Offer): void {
        let command = new CreateOfferCommand();
        command.offers.push(offer);
        this.wcOffersApiService.post(`/offers`, command).pipe(map(data =>
            console.log(data)));
    }
}

export interface OfferCloneDetailsResponse {
    offers: OfferCloneSkeleton[];
}

export interface OfferCloneSkeleton {
    id: number;
    title: string;
    description: string;
    iconTitle: string;
    iconDescription: string;
    displayedItems: string;
    content: string;
    displayOptions: string;
    cost: number;
    fullCost: number;
    costSku: string;
    duration: number;
    templateId: number;
    priority: number;
    prerequisite: string;
    maxQuantity: number;
}

export class CloneOfferCommand {
    targets: CloneOfferTarget[] = [];
    addTarget(id: number, code: String) {
        const target = new CloneOfferTarget();
        target.id = id;
        target.code = code;
        this.targets.push(target);
    }
}

export class CloneOfferTarget {
    id: number;
    code: String;
}
