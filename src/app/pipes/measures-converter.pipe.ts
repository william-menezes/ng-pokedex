import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'measuresConverter'
})
export class MeasuresConverterPipe implements PipeTransform {

  transform(value: number): string {
    const valueConverted = (value*0.1).toFixed(2);

    return valueConverted;
  }

}
