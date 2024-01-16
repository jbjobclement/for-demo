import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGreenTitle]'
})
export class GreenTitleDirective {

  constructor(
    private el: ElementRef
  ) {
    this.el.nativeElement.style.color = 'green'
    this.el.nativeElement.style.fontSize = '24px'
  }

}
