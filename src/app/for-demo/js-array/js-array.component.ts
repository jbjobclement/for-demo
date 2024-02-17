import { Component } from '@angular/core';
@Component({
  selector: 'app-form-customization',
  templateUrl: './js-array.component.html',
  styleUrls: ['./js-array.component.scss']
})
export class JsArrayComponent {
  arr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];

  newStructure = this.arr.map(n => {
    return {
      number: n
    }
  })
  
  numbersGreaterThanSix = this.arr.filter(n => {
    if (n > 6) {
      return true;
    }
    return false;
  })

  uniqueNumbersArray: number[] = this.numbersGreaterThanSix.reduce((a: number[], c) => {
    if (a.indexOf(c) === -1) {
      return [
        ...a,
        c
      ]
    }
    return a;
  }, []);
  
  sum = this.uniqueNumbersArray.reduce((a, c) => {
    return a + c
  }, 0)
}