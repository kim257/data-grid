import {Component} from "@angular/core";
import {GridOptions} from "ag-grid";


@Component({
  moduleId: module.id,
  selector: 'ag-editor-component',
  templateUrl: './ar-grid.html'
})
export class ArgridComponent {
  public gridOptions: GridOptions;

  constructor() {
    this.gridOptions = <GridOptions>{};
    this.gridOptions.rowData = this.createRowData();
    this.gridOptions.columnDefs = this.createColumnDefs();
    this.gridOptions.enableFilter = true;
  }

  public kim(event, name) {
    console.info(name, '>>>', event)
  }

  public kimFunction(action) {
    (action === 'add') ? this.gridOptions.api.updateRowData({
      add: [{
        name: "Bob",
        mood: "Happy",
        number: 10
      }]
    }) : this.gridOptions.api.updateRowData({
      remove: this.gridOptions.api.getSelectedRows()
    });
    console.info('>>>', this.gridOptions.api.getSelectedRows());
  }

  private createColumnDefs() {
    return [
      {headerName: "Name", field: "name", width: 300},
      {
        headerName: "Mood",
        field: "mood",
        editable: true,
        width: 250
      },
      {
        headerName: "Numeric",
        field: "number",
        editable: true,
        width: 250
      }
    ];
  }

  private createRowData() {
    return [
      {name: "Bob", mood: "Happy", number: 10},
      {name: "Harry", mood: "Sad", number: 3},
      {name: "Sally", mood: "Happy", number: 20},
      {name: "Mary", mood: "Sad", number: 5},
      {name: "John", mood: "Happy", number: 15},
      {name: "Jack", mood: "Happy", number: 25},
      {name: "Sue", mood: "Sad", number: 43},
      {name: "Sean", mood: "Sad", number: 1335},
      {name: "Niall", mood: "Happy", number: 2},
      {name: "Alberto", mood: "Happy", number: 123},
      {name: "Fred", mood: "Sad", number: 532},
      {name: "Jenny", mood: "Happy", number: 34},
      {name: "Larry", mood: "Happy", number: 13},
    ];
  }
}

