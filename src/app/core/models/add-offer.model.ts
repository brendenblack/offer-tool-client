import { OfferDisplay } from "./offer-display.model";
import { OfferContent } from "./offer-content.model";
import { OfferDisplayOptions } from "./offer-display-options.model";

export class AddOffer {
    code: string;
    title: string = "My New Offer";
    description: string;
    iconTitle: string;
    iconDescription: string;
    displayedItems: OfferDisplay;
    content: OfferContent;
    displayOptions = new OfferDisplayOptions();
    cost: number = 0;
    fullCost: number = -1;
    costSku = 'gold';
    duration: number = 28800;
    templateId: number = 6;
    priority: number = 0;
    prerequisite?: string;
    maxQuantity: number = 1;
    
    startDate: Date = new Date();
    endDate: Date = new Date(new Date().setDate(this.startDate.getDate() + 3));
    
    cooldownType:string = 'Time'; 
    cooldown:number = 0;
}
