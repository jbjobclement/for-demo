import { Directive, ElementRef } from '@angular/core';
import { NumberService } from '../../services/number.service';

@Directive({
  selector: '[appDirectiveWithService]',
  standalone: true
})
export class DirectiveWithServiceDirective {

  constructor(
    private numberService: NumberService,
    private el: ElementRef
  ) { 
  }
  
  ngOnInit(): void {
    this.el.nativeElement.textContent += this.numberService.numberFromService;
  }
}