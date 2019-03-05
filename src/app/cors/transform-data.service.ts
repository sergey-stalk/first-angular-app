import { ApiDataService } from '../shared/api-data.service';
import { Injectable } from '@angular/core';

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

  getApiData () {
    this.apiDataService.getCapitals().subscribe((data) => {
      this.pushToArray(data, this.capitals, 'capital');
    });
    this.apiDataService.getContinents().subscribe((data) => {
      this.pushToArray(data, this.continent, 'continent');
    });
    this.apiDataService.getCountris().subscribe((data) => {
      this.pushToArray(data, this.countrys, 'country');
    });
    this.apiDataService.getISO().subscribe((data) => {
      this.pushToArray(data, this.iso, 'iso');
    });
    this.apiDataService.getPhonesCode().subscribe((data) => {
      this.pushToArray(data, this.phoneCode, 'phoneCode');
    });
    this.apiDataService.getCurrency().subscribe((data) => {
      this.pushToArray(data, this.currency, 'currency');
      this.mergeData();
    });
  }

  pushToArray (data, arr, value) {
    for (const key in data) {
      const item = { key, [value]: data[key] };
      arr.push(item);
    }
  }
}
