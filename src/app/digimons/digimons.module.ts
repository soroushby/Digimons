import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigimonsRoutingModule } from './digimons-routing.module';
import { DigimonsComponent } from './digimons.component';
import { HttpClientModule } from '@angular/common/http';

import { AgGridModule } from 'ag-grid-angular';
import { MaterialModule } from '../shared/material/material.module';
import { DigimonsGridComponent } from './components/digimons-grid/digimons-grid.component';
import { DigimonsImageComponent } from './components/digimons-grid/digimons-image/digimons-image.component';

@NgModule({
  declarations: [DigimonsComponent, DigimonsGridComponent, DigimonsImageComponent],
  imports: [
    CommonModule,
    DigimonsRoutingModule,
    HttpClientModule,
    MaterialModule,
    AgGridModule,
  ],
})
export class DigimonsModule {}
