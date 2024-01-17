import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValueChangedEvent } from 'devextreme/ui/text_box';
import { DxTextBoxModule } from 'devextreme-angular';

@Component({
  selector: 'app-text-box-template',
  standalone: true,
  imports: [
    CommonModule,
    DxTextBoxModule
  ],
  templateUrl: './text-box-template.component.html',
  styleUrls: ['./text-box-template.component.scss']
})
export class TextBoxTemplateComponent {
  @Input() value: string = '';
  @Output() valueChanged = new EventEmitter();
  onValueChanged(e: ValueChangedEvent) {
    this.valueChanged.emit(e.value);
  }
}