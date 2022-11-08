import { Component } from '@angular/core';

import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-digimons-image',
  templateUrl: './digimons-image.component.html',
  styleUrls: ['./digimons-image.component.scss'],
})
export class DigimonsImageComponent {
  constructor() {}

  public cellValue: string | undefined;

  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.cellValue = this.getValueToDisplay(params);
  }

  // gets called whenever the cell refreshes
  refresh(params: ICellRendererParams): boolean {
    // set value into cell again
    this.cellValue = this.getValueToDisplay(params);
    return true;
  }

  buttonClicked() {
    alert(`${this.cellValue} medals won!`);
    console.log(this.cellValue);
  }

  getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value;
  }
}
