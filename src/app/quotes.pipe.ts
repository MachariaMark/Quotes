import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quotes'
})
export class QuotesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
