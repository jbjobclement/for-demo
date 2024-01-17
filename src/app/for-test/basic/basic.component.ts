import { Component } from '@angular/core';
import { NumberService } from '../../shared/services/number.service';

@Component({
  selector: 'app-for-test',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class ForTestComponent {
  
  numFromService: number;
  constructor(
    private numberService: NumberService
  ) {
    this.numFromService = this.numberService.numberTest;
  }
}