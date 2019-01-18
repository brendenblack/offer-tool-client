import { OfferContent, OfferDisplayItem, OfferDisplayOptions} from '.';

export class Offer {

    id?: number;
    code: string;
    title: string;
    description: string;
    iconTitle: string;
    iconDescription: string;
    cost = 0;
    fullCost = -1;
    costSku = 'gold';
    duration = 28800;
    templateId = 6;
    priority = 0;
    prerequisite?: string;
    maxQuantity = 1;
    startDate: Date = new Date();
    endDate: Date = new Date(new Date().setDate(this.startDate.getDate() + 3));
    cooldownType = 0;
    cooldown = 0;
    content = new OfferContent();
    display: OfferDisplayItem[] = [];
    displayOptions = new OfferDisplayOptions();
}
