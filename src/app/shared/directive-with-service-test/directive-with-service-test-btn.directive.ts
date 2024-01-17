import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appBsButton]',
    standalone: true
})
export class BsButton {

    constructor(private el: ElementRef){}

    ngOnInit(): void {
        this.el.nativeElement.style.color = 'red';
    }
}