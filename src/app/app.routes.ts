import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HandsontableComponent} from "./handsontable/handsontable.module";
import {ArgridComponent} from "./ar-grid/ar-grid.module";

const appRoutes: Routes = [
  {
    path: 'handsontable',
    component: HandsontableComponent
  },
  {
    path: 'argrid',
    component: ArgridComponent
  },
  {path: '**', redirectTo: 'handsontable'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
