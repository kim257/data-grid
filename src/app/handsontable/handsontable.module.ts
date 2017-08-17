import {Component} from "@angular/core";

@Component({
  selector: 'handsontable',
  templateUrl: './handsontable.html'
})
export class HandsontableComponent {

  constructor() {
    this.activate();
  }

  public activate() {
    console.info('work');
  }
}
