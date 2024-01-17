import { Component, Input } from '@angular/core';
import { NumberService } from '../shared/services/number.service';

@Component({
  selector: 'app-for-demo',
  templateUrl: './for-demo.component.html',
  styleUrls: ['./for-demo.component.scss']
})
export class ForDemoComponent {
  
  numFromService: number;
  constructor(
    private numberService: NumberService
  ) {
    this.numFromService = this.numberService.numberFromService;
  }
}