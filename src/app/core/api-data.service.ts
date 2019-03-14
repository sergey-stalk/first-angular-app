import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiDataService {

  constructor(private http: HttpClient) { }
  proxy = '/api';
  public getCountrys(): Observable<any> {

    const url = 'names.json';
    return this.http.get(this.proxy + url);
  }
  public getCapitals(): Observable<any> {
    const url = 'capital.json';
    return this.http.get(this.proxy + url);
  }
  public getISO(): Observable<any> {
    const url = 'iso3.json';
    return this.http.get(this.proxy + url);
  }
  public getCurrency(): Observable<any> {
    const url = 'currency.json';
    return this.http.get(this.proxy + url);
  }
  public getContinents(): Observable<any> {
    const url = 'continent.json';
    return this.http.get(this.proxy + url);
  }
  public getPhonesCode(): Observable<any> {
    const url = 'phone.json';
    return this.http.get(this.proxy + url);
  }

}
