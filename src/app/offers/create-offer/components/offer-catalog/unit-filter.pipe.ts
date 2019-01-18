import { Pipe, PipeTransform } from '@angular/core';
import { Unit } from 'src/app/core/models';

@Pipe({ name: 'unitFilter' })
export class UnitFilterPipe implements PipeTransform {

  transform(units: Unit[], isDisplaySurvivors: boolean, isDisplayCorpus: boolean, isDisplaySentinels: boolean): any {

    let filteredUnits = units;

    if (!isDisplaySentinels) {
        filteredUnits = filteredUnits.filter((u) => {
            return !u.tags.find(t => t === 'SENTINELS');
        });
    }

    if (!isDisplayCorpus) {
        filteredUnits = filteredUnits.filter((u) => {
            return !u.tags.find(t => t === 'CORPUS');
        });
    }

    if (!isDisplaySurvivors) {
        filteredUnits = filteredUnits.filter((u) => {
            return !u.tags.find(t => t === 'SURVIVORS');
        });
    }

    return filteredUnits;

  }
}
