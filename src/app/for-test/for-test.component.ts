import { Component } from '@angular/core';
import { NumberService } from '../shared/services/number.service';

@Component({
  selector: 'app-for-test',
  templateUrl: './for-test.component.html',
  styleUrls: ['./for-test.component.scss']
})
export class ForTestComponent {
  
  numFromService: number;
  constructor(
    private numberService: NumberService
  ) {
    this.numFromService = this.numberService.numberTest;
  }
}