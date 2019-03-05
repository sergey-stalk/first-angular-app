import { StorageControlService } from './storage-control.service';
import { Injectable } from '@angular/core';

@Injectable()
export class FilterService {

  allData = [];
  filtredData = [];

  constructor(private storageControlService: StorageControlService) { }

  filterCountris(value) {

    this.allData = this.storageControlService.checkStorage();
    if (value.length === 0 || value === '') {
      return this.allData;
    }

    this.filtredData = this.allData.filter((data) => {
      return data.country.toLowerCase().includes(value.toLowerCase());
    });

    return this.filtredData;
  }
}
