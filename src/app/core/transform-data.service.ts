import { ApiDataService } from './api-data.service';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs'
import { map, tap } from 'rxjs/operators'

@Injectable()

export class TransformDataService {

  constructor(private apiDataService: ApiDataService) { }

  countrys = [];
  capitals = [];
  iso = [];
  phoneCode = [];
  continent = [];
  currency = [];
  allData = [];

  createDB () {
    const dataStringify = JSON.stringify(this.allData);
    localStorage.setItem('data', dataStringify);
  }

  mergeData () {
    for (const i in this.countrys) {
      this.allData[i] = { ...this.countrys[i],
        ...this.capitals[i], ...this.phoneCode[i],
        ...this.iso[i], ...this.continent[i],
        ...this.currency[i] };
    }
    this.createDB();
  }

  getApiData (): Observable<any> {
    return forkJoin(
      this.apiDataService.getCapitals()
        .pipe(tap((data) => {
          this.pushToArray(data, this.capitals, 'capital');
        })),
      this.apiDataService.getContinents()
        .pipe(tap((data) => {
          this.pushToArray(data, this.continent, 'continent');
        })),
      this.apiDataService.getCountrys()
        .pipe(tap((data) => {
          this.pushToArray(data, this.countrys, 'country');
        })),
      this.apiDataService.getISO()
        .pipe(tap((data) => {
          this.pushToArray(data, this.iso, 'iso');
        })),
      this.apiDataService.getPhonesCode()
        .pipe(tap((data) => {
          this.pushToArray(data, this.phoneCode, 'phoneCode');
        })),
      this.apiDataService.getCurrency()
        .pipe(tap((data) => {
          this.pushToArray(data, this.currency, 'currency');
        })),
    ).pipe(
      tap(() => {
        this.mergeData();
      }),
      map(() => {
        return this.allData;
      }));
  }

  pushToArray (data, arr, value) {
    for (const key in data) {
      const item = { key, [value]: data[key] };
      arr.push(item);
    }
  }
}
