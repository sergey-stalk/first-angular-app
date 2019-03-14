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

  //это не лучший подход загружать все данные одним методом. Они должны подгружаться по необходимости. Не должно быть универсального метода с громким названием "getApiData". Должно быть много мелких методов. загружающих по одному ресурсу. Но можно сделать несколько объединяющих. Ниже преведена костыльная имплементация, чтобы побороть "асинхронность". В идеале старайся не подписываться не на что в сервисе. Лучше создавай методы которые возвращают обзерваблы и подписывайся на компонентах. Если прямо хочется в сервисе, лучше создать 2 метода - 1 возвращает обзервабл, второй с подпиской.
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
      this.apiDataService.getCountris()
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
