import { StorageControlService } from '../storage-control.service';
import { Injectable } from '@angular/core';

@Injectable()
export class FilterService {

  allData = [];
  filtredData = [];

  constructor(private storageControlService: StorageControlService) { }

  filterCountrys(value) {

    this.storageControlService.callStorage().subscribe((data) => {

      this.allData = data;

      if (value.length === 0 || value === '') {
        this.filtredData = this.allData;
      } else {
        this.filtredData = this.allData.filter((data) => {
          return data.country.toLowerCase().includes(value.toLowerCase());
        });
      }
      return this.filtredData;
    });

    return this.filtredData;
  }
}
