import {Component, OnInit} from '@angular/core';
import {getBasicData} from './data';

@Component({
  selector: 'app-handsontable',
  templateUrl: './handsontable.component.html',
  styleUrls: ['./handsontable.component.scss']
})
export class HandsontableComponent implements OnInit {

  data: any[] = getBasicData(10);
  colHeaders: string[] = ['ID', 'First Name', 'Last Name', 'Address',
    'Favorite food', 'Price', 'Is active'];
  columns: any[] = [
    {
      data: 'id'
    },
    {
      data: 'name.first',
      renderer: 'text',
      readOnly: true
    },
    {
      data: 'name.last',
      readOnly: true
    },
    {
      data: 'address'
    },
    {
      data: 'product.description',
      source: 'product.options',
      optionField: 'description',
      type: 'autocomplete',
      strict: false,
      visibleRows: 4
    },
    {
      data: 'price',
      type: 'numeric',
      format: '$ 0,0.00'
    },
    {
      data: 'isActive',
      type: 'checkbox',
      checkedTemplate: 'Yes',
      uncheckedTemplate: 'No'
    }
  ];
  colWidths: number[] = [null, null, null, null, null, null, 30];
  options: any = {
    stretchH: 'all',
    columnSorting: true,
    contextMenu: [
      'row_above', 'row_below', 'remove_row'
    ],
  };

  constructor() {
  }

  ngOnInit() {
  }

  afterChange(e: any) {
    console.log(e);
  }

}
