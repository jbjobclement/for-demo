import { NumberService } from '../../shared/services/number.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for-prac',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {
  num: number;
  constructor(
    private numberService: NumberService
  ) {
    this.num = this.numberService.numberPractice;
  }
}
