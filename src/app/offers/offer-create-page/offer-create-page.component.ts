import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/core/services/offer.service';
import { OfferCatalog, Tech, GrantableItem, Sku, Item, Unit } from 'src/app/core/models/offer-catalog.model';
import { CreateOfferService } from 'src/app/offers/offer-create-page/create-offer.service';
import { CatalogTechListComponent } from './catalog-tech-list/catalog-tech-list.component';

@Component({
  selector: 'app-offer-create-page',
  templateUrl: './offer-create-page.component.html',
  styleUrls: ['./offer-create-page.component.css'],
  providers: [CreateOfferService]
})
export class OfferCreatePageComponent implements OnInit {

  constructor(private createOfferService:CreateOfferService, private offersService: OfferService) { }

  private catalog: OfferCatalog;
  private unitTags: Set<string>;

  ngOnInit() {
    // this.offersService.getCatalog().subscribe(data => {
    //   this.catalog = data;
    // });

    let catalog = new OfferCatalog();
    var tech = new Tech();
    tech.categoryId = 1015;
    tech.name = "HFG1 Zombifier";
    tech.description = "Grants your ground based Heroes the Zombifying effect. Turn your enemy's last stand defenders into mindless zombies!";
    tech.slot = "Vindicator_DiamondTech";
    tech.limit = 1;
    tech.grantable = new GrantableItem();
    tech.grantable.sku = new Sku();
    tech.grantable.sku.code = "mysku";
    tech.grantable.item = new Item();
    tech.grantable.item.code = "myitemcode";
    tech.grantable.item.description = "item description";
    catalog.tech.push(tech);

    let unit1 = new Unit();
    unit1.type = 251;
    unit1.name = 'Phalanx';
    unit1.description = 'This durable APC has a mounted Machine Gun and carries with it a horde of Corpus Spartans who deploy as the unit takes damage to provide cover for it.';
    unit1.tags = [ 'CORPUS'];
    let maxbuildable = new GrantableItem();
    maxbuildable.sku = { code: '' };
    maxbuildable.item = { code: '', title: '', description: '', storeIconName: '' };
    unit1.maxbuildableSku = maxbuildable;
    catalog.units.push(unit1);

    let u2: Unit =
    {
      type: 270,
      name: 'Unique unit',
      description: 'ya it\'s a unique unit',
      tags: [ 'SENTINELS', 'UNIQUE' ],
      maxbuildableSku: 
      {
        sku: { code: 'mysku' },
        item: { code: 'myitem', title: 'item title', description: 'item description', storeIconName: 'iconname' }
      },
      unlockSku:
      {
        sku: { code: 'mysku' },
        item: { code: 'myitem', title: 'item title', description: 'item description', storeIconName: 'iconname' }
      }
    };
    catalog.units.push(u2);

    let u3: Unit =
    {
      type: 292,
      name: 'Hero unit',
      description: 'ya it\'s a hero unit',
      tags: [ 'SENTINELS', 'HERO' ],
      maxbuildableSku: 
      {
        sku: { code: 'mysku' },
        item: { code: 'myitem', title: 'item title', description: 'item description', storeIconName: 'iconname' }
      },
      unlockSku:
      {
        sku: { code: 'mysku' },
        item: { code: 'myitem', title: 'item title', description: 'item description', storeIconName: 'iconname' }
      }
    };
    catalog.units.push(u3);

    this.catalog = catalog;
  }

}
