import { NumberService } from './../services/number.service';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectiveWithServicePractice]'
})
export class DirectiveWithServicePracticeDirective {

  constructor(
    private numberService: NumberService,
    private el: ElementRef
  ) {
    this.el.nativeElement.style.fontSize = '30px'
    this.el.nativeElement.textContent += this.numberService.numberPractice
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.el.nativeElement.textContent += this.numberService.numberPractice
  }

}
