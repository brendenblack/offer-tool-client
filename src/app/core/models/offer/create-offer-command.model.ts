import { Offer } from 'src/app/core/models';

export class CreateOfferCommand {
    offers: Offer[] = [];
    userIds: number[] = [];
}
