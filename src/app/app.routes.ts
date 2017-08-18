import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HandsontableComponent} from "./handsontable/handsontable.component";

const appRoutes: Routes = [
  {
    path: 'handsontable',
    component: HandsontableComponent
  },
  {path: '**', redirectTo: 'handsontable'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
