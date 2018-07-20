export class CreateOffer {
    id: number;
    code: string;
    title: string;
    description: string;
    iconTitle: string;
    iconDescription: string;
    displayedItems: string;
    content: string;
    displayOptions: string;
    cost: number;
    fullCost: number;
    costSku = 'gold';
    duration: number;
    templateId: number;
    priority: number;
    prerequisite?: string;
    maxQuantity: number;
}