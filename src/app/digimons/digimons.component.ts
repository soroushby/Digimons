import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DigimonsService } from './digimons.service';
import { Digimons } from './interfaces/digimons';

@Component({
  selector: 'app-digimons',
  templateUrl: './digimons.component.html',
  styleUrls: ['./digimons.component.scss'],
})
export class DigimonsComponent {
  allDigimons$: Observable<Digimons[]> | undefined;
  url: any = 'https://digimon-api.vercel.app/api/digimon';

  constructor(private digimonsService: DigimonsService) {
    this.allDigimons$ = this.digimonsService.getAllDigimons(this.url);
  }
}
