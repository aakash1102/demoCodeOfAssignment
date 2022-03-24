import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(users: any, searchValue:string) {
    if(users.length===0 || searchValue===''){
      return users;
    }
    
    }
  }

