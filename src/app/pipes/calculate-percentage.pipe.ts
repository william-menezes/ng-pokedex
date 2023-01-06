import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculatePercentage'
})
export class CalculatePercentagePipe implements PipeTransform {

  transform(value: number, gender: string): any {
    const fem = (value/8)*100;
    const masc = 100 - fem;

    switch (gender) {
      case 'fem':
        return fem.toFixed(1);
      case 'masc':
        return masc.toFixed(1);
    };
  }

}
