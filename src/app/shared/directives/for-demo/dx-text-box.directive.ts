import { Directive } from '@angular/core';
import { DxTextBoxComponent } from 'devextreme-angular';

@Directive({
  selector: '[appDxTextBox]',
  standalone: true
})
export class DxTextBoxDirective {
  constructor(
    private dxTextBox: DxTextBoxComponent
  ) {
    this.dxTextBox.placeholder = 'default placeholder'
  }
}