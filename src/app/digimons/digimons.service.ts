import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Digimons } from './interfaces/digimons';

@Injectable({
  providedIn: 'root',
})
export class DigimonsService {
  constructor(private http: HttpClient) {}

  getAllDigimons(url: any): any {
    return this.http.get(url).pipe(shareReplay());
  }
}
