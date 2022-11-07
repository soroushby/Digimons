import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigimonsRoutingModule } from './digimons-routing.module';
import { DigimonsComponent } from './digimons.component';


@NgModule({
  declarations: [
    DigimonsComponent
  ],
  imports: [
    CommonModule,
    DigimonsRoutingModule
  ]
})
export class DigimonsModule { }
