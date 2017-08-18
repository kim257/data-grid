import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HotTableModule} from 'ng2-handsontable';

import {AppComponent} from './app.component';
import {routing} from './app.routes';
import {HandsontableComponent} from './handsontable/handsontable.component';

@NgModule({
  declarations: [
    AppComponent,
    HandsontableComponent
  ],
  imports: [
    BrowserModule,
    HotTableModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
