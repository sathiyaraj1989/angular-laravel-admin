import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeUserFilter'
})
export class ActiveUserFilterPipe implements PipeTransform {

  transform(items: any[], filterSelect: any): any {
    if(items != undefined) {
      if(filterSelect == null) {
        return items;
      }

      if(filterSelect == false) {
        let filteredItems = items.filter(function(items){
          return items.status == false;          
        })
        return filteredItems;
      } else {
        let filteredItems = items.filter(function(items){
          return items.status == true;
        })
        return filteredItems;

      }
    }
  }

}
