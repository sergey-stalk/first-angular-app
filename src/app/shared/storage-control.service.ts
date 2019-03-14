import { TransformDataService } from '../core/transform-data.service';

import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

@Injectable()
export class StorageControlService {

  constructor(private transformDataService: TransformDataService) { }

<<<<<<< HEAD
  callStorage(): Observable<any> {
    if (!localStorage.data || localStorage.data === '') {
      this.createDB();
      return this.transformDataService.getApiData();
    }
=======
  // судя по названию должен возвращать булин. Нужно переименовать
  checkStorage(): Observable<any> {
    if (!localStorage.data || localStorage.data === '') {
      return this.transformDataService.getApiData();
    }

>>>>>>> f2a3e3faa4e1160ca42230c7cc2b731f2e77042a
    return of(JSON.parse(localStorage.data));
  }

  createDB () {
    this.transformDataService.getApiData().subscribe((data) => {
      const dataStringify = JSON.stringify(data);
      localStorage.setItem('data', dataStringify);
    });
  }
}
