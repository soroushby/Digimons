import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { Digimons } from '../../interfaces/digimons';

@Component({
  selector: 'app-digimons-grid',
  templateUrl: './digimons-grid.component.html',
  styleUrls: ['./digimons-grid.component.scss'],
})
export class DigimonsGridComponent implements OnInit {
  @Input() digimons: Observable<Digimons[]> | undefined;
  public columnDefs: ColDef[] = [
    { field: 'Name' },
    { field: 'Image' },
    { field: 'Level' },
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.http.get<any[]>(
      'https://www.ag-grid.com/example-assets/row-data.json'
    );
  }

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

  ngOnInit(): void {}
}
