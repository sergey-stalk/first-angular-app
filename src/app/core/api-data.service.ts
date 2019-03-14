import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD:src/app/core/api-data.service.ts
import { Observable } from 'rxjs';
=======
import { Observable } from 'rxjs'
>>>>>>> f2a3e3faa4e1160ca42230c7cc2b731f2e77042a:src/app/cors/api-data.service.ts

@Injectable()
export class ApiDataService {

  constructor(private http: HttpClient) { }
  proxy = '/api';
<<<<<<< HEAD:src/app/core/api-data.service.ts
  public getCountrys(): Observable<any> {
=======
  public getCountris(): Observable<any> {
>>>>>>> f2a3e3faa4e1160ca42230c7cc2b731f2e77042a:src/app/cors/api-data.service.ts

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
