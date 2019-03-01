import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  public filerByName(arr, event) {
    let value = '';
    let filtred = [];
    value = event.target.value;
    filtred = arr.filter((item) => {
      return item.countri.includes(value);
    });
    return filtred;
  }
  constructor() { }

}
