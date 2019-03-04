import { ApiDataService } from './api-data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CacheService {

  constructor(private apiDataService: ApiDataService) { }

  countrys = [];
  capitals = [];
  iso = [];
  phoneCode = [];
  continent = [];
  currency = [];
  allData = [];
  lenth = 250;

  mergeData () {
    // tslint:disable-next-line:no-increment-decrement
    for (let i = 0; i < this.countrys.length; i++) {
      this.allData[i] = { ...this.countrys[i],
        ...this.capitals[i], ...this.phoneCode[i],
        ...this.iso[i], ...this.continent[i],
        ...this.currency[i] };
    }
  }

  getApiData () {
    this.apiDataService.getCapitals().subscribe((data) => {
      this.pushToArray(data, this.capitals, false, 'capitals');
    });
    this.apiDataService.getContinents().subscribe((data) => {
      this.pushToArray(data, this.continent, false, 'continent');
    });
    this.apiDataService.getCountris().subscribe((data) => {
      this.pushToArray(data, this.countrys, true, 'countrys');
    });
    this.apiDataService.getISO().subscribe((data) => {
      this.pushToArray(data, this.iso, false, 'iso');
    });
    this.apiDataService.getPhonesCode().subscribe((data) => {
      this.pushToArray(data, this.phoneCode, false, 'phoneCode');
    });
    this.apiDataService.getCurrency().subscribe((data) => {
      this.pushToArray(data, this.currency, false, 'currency');
      this.mergeData();
    });
  }

  pushToArray (data, arr, country:boolean, value) {
    isFinite;
    for (const key in data) {
      const item = { key, [value]: data[key] };
      arr.push(item);
    }
  }

  checkStorage () {
    localStorage.setItem('data', 'hello');
    this.getApiData();
  }

}
