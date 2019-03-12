import { TransformDataService } from '../cors/transform-data.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

@Injectable()
export class StorageControlService {

  constructor(private transformDataService: TransformDataService) { }

  // судя по названию должен возвращать булин. Нужно переименовать
  checkStorage(): Observable<any> {
    if (!localStorage.data || localStorage.data === '') {
      return this.transformDataService.getApiData();
    }

    return of(JSON.parse(localStorage.data));
  }

  createDB (data) {
    const dataStringify = JSON.stringify(data);
    localStorage.setItem('data', dataStringify);
  }
}
