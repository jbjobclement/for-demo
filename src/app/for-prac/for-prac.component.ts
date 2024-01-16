import { NumberService } from './../shared/services/number.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for-prac',
  templateUrl: './for-prac.component.html',
  styleUrls: ['./for-prac.component.scss']
})
export class ForPracComponent {
  num: number;
  constructor(
    private numberService: NumberService
  ) {
    this.num = this.numberService.numberPractice;
  }
}
