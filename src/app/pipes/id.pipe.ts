import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'id',
})
export class IdPipe implements PipeTransform {
  transform(value: number): unknown {
    const id = value.toString();

    if (value < 10) {
      const newId = `00${id}`;
      return newId;
    } else if (value < 100) {
      const newId = `0${id}`;
      return newId;
    } else {
      return value;
    }
  }
}
