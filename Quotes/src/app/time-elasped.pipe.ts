import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeElasped'
})
export class TimeElaspedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
