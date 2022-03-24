import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user';



@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(users: any, searchValue:string) {
    if(users.length===0 || searchValue===''){
      return users;
    }
    return users.filter((user:User) => {
      return(user.name.toLowerCase().match(searchValue.toLowerCase()) ||
      user.email.toLowerCase().match(searchValue.toLowerCase()) ||
      user.company.toLowerCase().match(searchValue.toLowerCase()));
    });
    }
  }

