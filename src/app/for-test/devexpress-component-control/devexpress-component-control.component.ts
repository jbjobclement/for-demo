import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent, DxTextBoxComponent } from 'devextreme-angular';


@Component({
  selector: 'app-devexpress-component-control',
  templateUrl: './devexpress-component-control.component.html',
  styleUrls: ['./devexpress-component-control.component.scss']
})
export class DevexpressComponentControlComponent {

  // 父元件呼叫子元件的方法使用ViewChild
  @ViewChild('textBox') textBox!: DxTextBoxComponent;
  @ViewChild('datagrid') datagrid!: DxDataGridComponent;
  dataSource: { test: number }[] = [
    { test: 10},
    { test: 20},
    { test: 30},
    { test: 40},
    { test: 50},
    { test: 60},
  ]
  items: { test: number }[] = []

  constructor() {}

  OnInit(){}

  changePlaceHolder(){
    this.textBox.placeholder = 'change placeholder'
  }

  changePlaceHolderByInstance(){
    this.textBox.instance.option('placeholder', 'changed placeholder by instance')
  }

  changeToReadOnly(){
    this.textBox.readOnly = true;
  }

  changeToReadOnlyByInstance(){
    this.textBox.instance.option('readOnly', true)
  }

  changeReadOnlyToFalse(){
    this.textBox.instance.option('readOnly', false)
  }

  retrieveData(){
    const items = this.datagrid.instance.getDataSource().items()
    this.items = items;
  }

  reset() {
    this.items = [];
  }

}
