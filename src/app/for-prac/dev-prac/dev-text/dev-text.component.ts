import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ValueChangedEvent } from 'devextreme/ui/text_box';

@Component({
  selector: 'app-dev-text',
  templateUrl: './dev-text.component.html',
  styleUrls: ['./dev-text.component.scss']
})
export class DevTextComponent {
@Input() value: string = '';
@Output() valueChanged = new EventEmitter();
onValueChanged(e: ValueChangedEvent) {
  // console.log(this.value)
  // console.log(e.value)
  this.valueChanged.emit(e.value);
  // console.log(this.value)
}

test(e: any){
  console.log('dev-text'+e)
}
}
