import { TransformDataService } from '../cors/transform-data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class StorageControlService {

  constructor(private transformDataService: TransformDataService) { }

  checkStorage() {
    if (!localStorage.data || localStorage.data === '') {
      this.transformDataService.getApiData();
      this.createDB(this.transformDataService.allData);
    } else {
      return JSON.parse(localStorage.data);
    }
  }

  createDB (data) {
    const dataStringify = JSON.stringify(data);
    localStorage.setItem('data', dataStringify);
  }
}
