/**
 * Describes a row in the offers table
 */
export class OfferEntity {
    id: number;
    offerCode: string;
    startTime: number;
    endTime: number;
    modifiedTime: number;
    content: string;
    title: string;
    description: string;
    iconTitle: string;
    iconDescription: string;
    displayOptions: string;
    cost: number;
    fullCost: number;
    costSku: string;
    duration: number;
}
