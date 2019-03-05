import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiDataService {

  constructor(private http: HttpClient) { }
  proxy = '/api';
  public getCountris() {

    const url = 'names.json';
    return this.http.get(this.proxy + url);
  }
  public getCapitals() {
    const url = 'capital.json';
    return this.http.get(this.proxy + url);
  }
  public getISO() {
    const url = 'iso3.json';
    return this.http.get(this.proxy + url);
  }
  public getCurrency() {
    const url = 'currency.json';
    return this.http.get(this.proxy + url);
  }
  public getContinents() {
    const url = 'continent.json';
    return this.http.get(this.proxy + url);
  }
  public getPhonesCode() {
    const url = 'phone.json';
    return this.http.get(this.proxy + url);
  }
}
