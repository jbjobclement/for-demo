import { Component } from '@angular/core';
@Component({
  selector: 'app-form-customization',
  templateUrl: './js-array.component.html',
  styleUrls: ['./js-array.component.scss']
})
export class JsArrayComponent {
  numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];

  newStructure = this.numbers.map(number => {
    return {
      number: number
    }
  })
  
  numbersGreaterThanSix = this.numbers.filter(number => {
    if (number > 6) {
      return true;
    }
    return false;
  })

  uniqueNumbersArray: number[] = this.numbersGreaterThanSix.reduce((accumulator: number[], currentValue) => {
    if (accumulator.indexOf(currentValue) === -1) {
      return [
        ...accumulator,
        currentValue
      ]
    }
    return accumulator;
  }, []);
  
  sum = this.uniqueNumbersArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, 0)
}