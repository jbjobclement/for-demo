import { Component, ViewChild } from '@angular/core';
import { DxDataGridComponent, DxTextBoxComponent } from 'devextreme-angular';

@Component({
  selector: 'app-dev-controll',
  templateUrl: './dev-controll.component.html',
  styleUrls: ['./dev-controll.component.scss']
})
export class DevControllComponent {
  @ViewChild('textBox') textBox!: DxTextBoxComponent;
  @ViewChild('datagrid') datagrid!: DxDataGridComponent;
  dataSource: { test: string }[] = [
    { test: 'a'},
    { test: 'b'},
    { test: 'c'},
  ]
  items: { test: string }[] = []

  changePlaceHolder() {
    console.log(this.textBox)
    this.textBox.placeholder = 'Changed placeholder'
    this.textBox.width = '1000px'
  }

  changePlaceHolderByInstance() {
    console.log(this.textBox.instance)
    console.log(this.textBox.instance.option)
    this.textBox.instance.option('placeholder', 'changed placeholder by instance')
    this.textBox.instance.option('width', '500px')

  }

  retrieveData() {
    this.items = this.datagrid.instance.getDataSource().items();
    console.log(this.datagrid.instance.getDataSource())
  }
}
