import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HotTableModule} from 'ng2-handsontable';

import {AppComponent} from './app.component';
import {routing} from './app.routes';
import {HandsontableComponent} from "./handsontable/handsontable.module";
import {AgGridModule} from "ag-grid-angular";
import {ArgridComponent} from "./ar-grid/ar-grid.module";

@NgModule({
  declarations: [
    AppComponent,
    HandsontableComponent,
    ArgridComponent
  ],
  imports: [
    BrowserModule,
    HotTableModule,
    routing,
    AgGridModule.withComponents([
      ArgridComponent
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
