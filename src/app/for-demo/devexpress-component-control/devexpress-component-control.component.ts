import { Component, ViewChild } from '@angular/core';
import { DxPopupComponent, DxTextBoxComponent } from 'devextreme-angular';

@Component({
  selector: 'app-devexpress-component-control',
  templateUrl: './devexpress-component-control.component.html',
  styleUrls: ['./devexpress-component-control.component.scss']
})
export class DevexpressComponentControlComponent {
  @ViewChild('textBox') textBox!: DxTextBoxComponent;
  changePlaceHolder() {
    this.textBox.placeholder = 'changed placeholder'
  }

  changePlaceHolderByInstance() {
    this.textBox.instance.option('placeholder', 'changed placeholder by instance')
  }
}