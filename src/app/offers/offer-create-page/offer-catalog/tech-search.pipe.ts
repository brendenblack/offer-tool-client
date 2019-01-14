import { Pipe, PipeTransform } from '@angular/core';
import { Tech } from 'src/app/core/models';

@Pipe({ name: 'techSearch' })
export class TechSearchPipe implements PipeTransform {
  transform(tech: Tech[], searchText: string): any {
    if(searchText) {
      return tech.filter((t) => {
        return (t.name && t.name.toUpperCase().includes(searchText.toUpperCase()))
          || (t.categoryId && t.categoryId.toString() === searchText)
          || (t.slot && t.slot.toUpperCase().includes(searchText.toUpperCase()))
      }); //.sort((a,b) => a.type < b.type ? 1 : a.type > b.type ? -1 : 0);
    } else {
      return tech;
      
    }
    // return categories.filter(function(category){
    //   return category.CategoryName.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    // })
  }
}