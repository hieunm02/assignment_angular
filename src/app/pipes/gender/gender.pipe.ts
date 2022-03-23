import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    if(value == 'true'){
      return 'Nam'
    }else if(value == 'false'){
      return 'Nữ'
    }
    return 'Khác';
  }

}
