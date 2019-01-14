import { Pipe, PipeTransform } from '@angular/core';
import { Unit } from 'src/app/core/models';

@Pipe({ name: 'unitSearch' })
export class UnitSearchPipe implements PipeTransform {
  transform(units: Unit[], searchText: string): any {
    if(searchText) {
      return units.filter((t) => {
        return (t.name && t.name.toUpperCase().includes(searchText.toUpperCase()))
          || t.tags.some(t => t.includes(searchText.toUpperCase()))
          || t.type.toString().includes(searchText)
      }).sort((a,b) => a.type < b.type ? 1 : a.type > b.type ? -1 : 0);
    } else {
      return units;
    }
  }
}