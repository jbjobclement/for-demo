import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeaderModifier]',
  standalone: true
})
export class HeaderModifierDirective {

  constructor(
    private el: ElementRef
  ) {
    this.el.nativeElement.style.fontSize = '30px'
    this.el.nativeElement.style.color = 'yellow'
  }
}
