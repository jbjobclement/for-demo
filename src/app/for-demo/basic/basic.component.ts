import { Component } from '@angular/core';
import { NumberService } from 'src/app/shared/services/number.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {
  numFromService: number;
  constructor(
    private numberService: NumberService
  ) {
    this.numFromService = this.numberService.numberFromService;
  }
}
