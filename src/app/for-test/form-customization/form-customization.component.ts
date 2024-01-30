import { Component, OnInit } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { Item, SimpleItemTemplateData} from 'devextreme/ui/form';


@Component({
  selector: 'app-form-customization',
  templateUrl: './form-customization.component.html',
  styleUrls: ['./form-customization.component.scss']
})
export class FormCustomizationComponent {
  resultName: string = '';
  resultGender: string = '';
  classNameMap: {[k: string]: any} = {
    color: '',
    bold: '',
    italics: '',
    baseline: '',
  };
  classNameString: string = '';
  fontStyle: string = '';
  formItems: Item[] = [
    {
      itemType: 'tabbed',
      tabs: [
        {
          title: 'Title - 1',
          colCount: 2,
          items: [
            {
              itemType: 'group',
              // 一列五行
              colCount: 5,
              colSpan: 2,
              caption: 'group',
              items: [
                {
                  dataField: 'for-group-1'
                },
                {
                  dataField: 'for-group-2'
                },
                {
                  itemType: 'empty',
                },
                {
                  dataField: 'for-group-3'
                },
                {
                  itemType: 'empty',
                },
              ]
            },
            {
              dataField: 'name'
            },
            {
              dataField: 'gender'
            },
            // 3
            {
              itemType: 'group',
              colCount: 10,
              colSpan: 2,
              caption: '樣式設定',
              items: [
                {
                  dataField: 'fontColor',
                  editorType: 'dxRadioGroup',
                  colSpan: 5,
                  editorOptions: {
                    valueExpr: 'value',
                    layout: 'horizontal',
                    items: [
                      {
                        text: '紅色',
                        value: 'red',
                      },
                      {
                        text: '黃色',
                        value: 'yellow',
                      },
                      {
                        text: '藍色',
                        value: 'blue',
                      }
                    ]
                  }
                },
                {
                  dataField: 'bold',
                  editorType: 'dxCheckBox',
                  label: { text: '粗體', visible: true, location: 'left' },
                  colSpan: 1,
                },
                {
                  dataField: 'italics',
                  editorType: 'dxCheckBox',
                  label: { text: '斜體', visible: true, location: 'left' },
                  colSpan: 1,
                },
                {
                  dataField: 'baseline',
                  editorType: 'dxCheckBox',
                  label: { text: '底線', visible: true, location: 'left' },
                  colSpan: 1,
                },
              ]
            },
          ]
        },
        {
          title: 'Title - 2',
          items: [
              {
                dataField: 'first name'
              },
              {
                dataField: 'last name',
              },
          ]
        }
      ],
    }
  ]

  constructor(){}
  OnInit() {

  }

  onFieldDataChanged(event: any) {
    // 文字
    if (event.dataField === 'name'){
      this.resultName = event.value;
    } 
    if(event.dataField === 'gender'){
      this.resultGender = event.value
    }
    
    // 加入樣式
    if (event.dataField === 'fontColor'){
      this.getClass(false, event.value)
    }else if(event.dataField !== 'fontColor' && event.value === true){
      this.getClass(true, event.dataField)
    }

    // 取消樣式
    if (event.dataField !== 'fontColor' && event.value === false){
      this.classNameMap[event.dataField] = '';
      this.convertMapToString();
    }
  }

  getClass(changeStyle: boolean ,className: string) {
    if (changeStyle) {
      this.classNameMap[className]= className;
    } else {
      this.classNameMap['color'] = className;
    }
    this.convertMapToString()
  }

  convertMapToString() {
    this.classNameString = 
        this.classNameMap['color'] + " " +
        this.classNameMap['bold']+ " " +
        this.classNameMap['italics'] + " " +
        this.classNameMap['baseline'];
  }
}
