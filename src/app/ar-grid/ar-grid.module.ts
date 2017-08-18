import {Component} from "@angular/core";

@Component({
  templateUrl: './ar-grid.html'
})
export class ArgridComponent {

  public rowData = [
    {make: "Toyota", model: "Celica", price: 35000},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxter", price: 72000}
  ];

  public columnDefs = [
    {headerName: "Make", field: "make"},
    {headerName: "Model", field: "model"},
    {headerName: "Price", field: "price"}
  ]

  constructor() {
    this.activate();
  }

  public activate() {
    console.log('work ArgridComponent');
  }
}
