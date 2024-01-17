import { NumberService } from '../services/number.service';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectiveWithServiceTest]',
  standalone: true
})
export class DirectiveWithServiceDirectiveTest {

  constructor(
    private numberService: NumberService,
    private el: ElementRef
  ) {
    this.el.nativeElement.style.fontSize = '45px'
    this.el.nativeElement.textContent += this.numberService.numberTest
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.el.nativeElement.textContent += this.numberService.numberTest
  }

}
