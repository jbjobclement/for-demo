import { Component } from '@angular/core';
import { Item } from 'devextreme/ui/form'
import { empty } from 'rxjs';

@Component({
  selector: 'app-form-customization',
  templateUrl: './form-customization.component.html',
  styleUrls: ['./form-customization.component.scss'],
})
export class FormCustomizationComponent {
  formItems: Item[] = [
    {
      itemType: 'tabbed',
      tabs: [{
        title: 'Title-1',
        colCount: 2,
        items: [
          {
            itemType: 'group',
            colSpan: 2,
            colCount: 5,
            caption: 'group',
            items: [
              {
                dataField: 'for group 1'
              },
              {
                dataField: 'for group 2'
              },
              {
                itemType: 'empty',
              },
              {
                dataField: 'for group 3',
                colSpan: 2
              },
            ]
          },
          {
            dataField: 'name'
          },
          {
            dataField: 'gender'
          }
        ]
      },
      {
        title: 'Title-2',
        items: [
          {
            dataField: 'first name'
          },
          {
            dataField: 'last name'
          }
        ]
      },
      {
        title: 'title-3',
        colCount: 5,
        items: [
          {
            dataField: 'abc',
            colSpan: 3,
            isRequired: true
          },
          { itemType: 'empty'},
          { itemType: 'empty'},
          {
            dataField: 'test',
            colSpan: 5,
          }
        ],

      }
      ]
    }
  ]
}
