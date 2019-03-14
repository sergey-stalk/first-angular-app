import { StorageControlService } from './storage-control.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

@Injectable()
export class FilterService {

  allData = [];
  filtredData = [];

  constructor(private storageControlService: StorageControlService) { }

<<<<<<< HEAD
  filterCountrys(value) {

    this.storageControlService.callStorage().subscribe((data) => {
      this.allData = data;

      if (value.length === 0 || value === '') {
        this.filtredData = this.allData
      } else {
        this.filtredData = this.allData.filter((data) => {
          return data.country.toLowerCase().includes(value.toLowerCase());
        });
      }
      return this.filtredData;
    });

    return this.filtredData;
=======
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
>>>>>>> f2a3e3faa4e1160ca42230c7cc2b731f2e77042a
  }
}
