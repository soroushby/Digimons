import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigimonsRoutingModule } from './digimons-routing.module';
import { DigimonsComponent } from './digimons.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DigimonsComponent],
  imports: [CommonModule, DigimonsRoutingModule, HttpClientModule],
})
export class DigimonsModule {}
