/**
 * Describes a row in the offers table
 */
export class OfferRowInsert {
    id: number;
    offerCode: String;
    startTime: number;
    endTime: number;
    modifiedTime: number;
    content: String;
    title: String;
    description: String;
    iconTitle: String;
    iconDescription: String;
    cost: number;
    fullCost: number;
    costSku: String = 'gold';
}
