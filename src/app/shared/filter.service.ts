import { StorageControlService } from './storage-control.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

@Injectable()
export class FilterService {

  allData = [];
  filtredData = [];

  constructor(private storageControlService: StorageControlService) { }

  // метод checkStorage может делать запрос на бэк. Плохо в фильтрующий метод вставлять методы которые могут делать запрос на бэк.
  filterCountris(value): Observable<any> {
    return this.storageControlService.checkStorage().pipe(
      tap((data) => {
        this.allData = data;
        if (value.length === 0 || value === '') {
          return this.allData;
        }

        this.filtredData = this.allData.filter((data) => {
          return data.country.toLowerCase().includes(value.toLowerCase());
        });

        return this.filtredData;
      }),
    );
  }
}
