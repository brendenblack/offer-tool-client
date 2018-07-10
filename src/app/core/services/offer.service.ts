import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';
import { Offer, CreateOffer } from '../models';
import { map } from 'rxjs/operators';

@Injectable()
export class OfferService {
    constructor(private apiService: ApiService) {}

    getOffers(active: boolean = false): Observable<Offer[]> {
        return this.apiService.get(`/offers?active=${active}`).pipe(map(data => {
            return data.offers;
        }));
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

    getCloneDetails(ids: number[]): Observable<CreateOffer[]> {
        return this.apiService.get(`/offers/clone?ids=${ids.join(',')}`).pipe(map(data => {
            return data.offers;
        }));
    }
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
