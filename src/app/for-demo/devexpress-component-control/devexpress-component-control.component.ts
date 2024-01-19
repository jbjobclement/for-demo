import { Component, ViewChild } from '@angular/core';
import { DxDataGridComponent, DxTextBoxComponent } from 'devextreme-angular';

@Component({
  selector: 'app-devexpress-component-control',
  templateUrl: './devexpress-component-control.component.html',
  styleUrls: ['./devexpress-component-control.component.scss']
})
export class DevexpressComponentControlComponent {
  @ViewChild('textBox') textBox!: DxTextBoxComponent;
  @ViewChild('datagrid') datagrid!: DxDataGridComponent;
  dataSource: { test: string }[] = [
    { test: 'a'},
    { test: 'b'},
    { test: 'c'},
  ]
  items: { test: string }[] = []
  changePlaceHolder() {
    this.textBox.placeholder = 'changed placeholder'
  }

  changePlaceHolderByInstance() {
    this.textBox.instance.option('placeholder', 'changed placeholder by instance')
  }

  retrieveData() {
    const items = this.datagrid.instance.getDataSource().items()
    this.items = items;
  }
}