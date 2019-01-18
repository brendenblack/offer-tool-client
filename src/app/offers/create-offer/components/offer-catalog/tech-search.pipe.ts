import { Pipe, PipeTransform } from '@angular/core';
import { Tech } from 'src/app/core/models';

@Pipe({ name: 'techSearch' })
export class TechSearchPipe implements PipeTransform {
  transform(tech: Tech[], searchText: string): any {
    if(searchText) {
      return tech.filter((t) => {
        return (t.name && t.name.toUpperCase().includes(searchText.toUpperCase()))
          || (t.categoryId && t.categoryId.toString() === searchText)
          || (t.slot && t.slot.toUpperCase().includes(searchText.toUpperCase()));
      });
    } else {
      return tech;
    }
  }
}
