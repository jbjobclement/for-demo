import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAlertPara]',
  standalone: true
})
export class AlertParaDirective {

  constructor(
    private el: ElementRef
  ) {
    this.el.nativeElement.style.color = 'red'
    this.el.nativeElement.style.fontSize = '28px'
  }

}
