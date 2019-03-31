import { TransformDataService } from '../core/services/transform-data.service';

import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()

export class StorageControlService {

  constructor(private transformDataService: TransformDataService) { }

  callStorage(): Observable<any> {
    if (!localStorage.data || localStorage.data === '') {
      this.createDB();
      return this.transformDataService.getApiData();
    }
    return of(JSON.parse(localStorage.data));
  }

  createDB () {
    this.transformDataService.getApiData().subscribe((data) => {
      const dataStringify = JSON.stringify(data);
      localStorage.setItem('data', dataStringify);
    });
  }

  updateStorage (el, idx) {
    const arr = JSON.parse(localStorage.data);
    const newArr = arr.map((item, i) => {
      if (i === idx) {
        // tslint:disable-next-line:no-parameter-reassignment
        item = el;
      }
      return item;
    });
    localStorage.data = JSON.stringify(newArr);
    return newArr;
  }
}
