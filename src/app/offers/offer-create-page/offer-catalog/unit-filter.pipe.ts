import { Pipe, PipeTransform } from '@angular/core';
import { Unit } from 'src/app/core/models';

@Pipe({ name: 'unitFilter' })
export class UnitFilterPipe implements PipeTransform {

  transform(units: Unit[], isDisplayUniques: boolean, isDisplayHeroes: boolean, isDisplaySingleUse: boolean): any {

    let filteredUnits = units;

    if (!isDisplayHeroes) {
        filteredUnits = filteredUnits.filter((u) => {
            return !u.tags.find(t => t === 'HERO');
        });
    }

    if (!isDisplayUniques) {
        filteredUnits = filteredUnits.filter((u) => {
            return !u.tags.find(t => t === 'UNIQUE');
        });
    }

    if (!isDisplaySingleUse) {
        filteredUnits = filteredUnits.filter((u) => {
            return !u.tags.find(t => t === 'SINGLE_USE');
        });
    }

    return filteredUnits;

  }
}
