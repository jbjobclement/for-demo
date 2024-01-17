import { Directive } from '@angular/core';
import { DxTextBoxComponent } from 'devextreme-angular';

@Directive({
  selector: '[appDxTextBox]',
  standalone: true
})
export class DxTextBoxDirective {
  constructor(
    // https://js.devexpress.com/Angular/Documentation/22_2/ApiReference/UI_Components/dxTextBox/Configuration/
    private dxTextBox: DxTextBoxComponent
  ) {
    this.dxTextBox.placeholder = 'default placeholder'
  }
}