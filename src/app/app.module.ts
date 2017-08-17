import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {routing} from './app.routes';
import {HandsontableComponent} from "./handsontable/handsontable.module";

@NgModule({
  declarations: [
    AppComponent,
    HandsontableComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
