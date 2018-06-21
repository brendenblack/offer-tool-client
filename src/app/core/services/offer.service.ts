import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ApiService } from "./api.service";
import { Offer } from "../models"; 
import { map } from 'rxjs/operators';

@Injectable()
export class OfferService {
    constructor(private apiService : ApiService) {}

    getOffers(active: boolean = false): Observable<Offer[]> {
        return this.apiService.get(`/offers?active=${active}`).pipe(map(data => {
            return data.offers;
        }));
    }
}