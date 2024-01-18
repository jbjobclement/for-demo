import { Directive } from '@angular/core';
import { DxTextBoxComponent } from 'devextreme-angular';
import { DxSelectBoxComponent } from 'devextreme-angular';

@Directive({
  selector: '[appDevDirective]',
  standalone: true
})
export class DevDirectiveDirective {

  constructor(private dxText: DxSelectBoxComponent) {
    this.dxText.placeholder = 'Enter a fruit by dev-directive'
   }

}
