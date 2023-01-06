import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description',
})
export class DescriptionPipe implements PipeTransform {
  transform(value: string): string {

    return value.replace(/[^\x20-\x7E]/gmi, " ");
  }
}
