import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[blueHeaderModifier]',
  standalone: true
})
export class BlueHeaderModifierDirective {

  constructor(
    private el: ElementRef
  ) {
    this.el.nativeElement.style.fontSize = '50px'
    this.el.nativeElement.style.color = 'blue'
  }
}
