import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAllDataService {

  constructor(private http: HttpClient) { }

  proxy = '/api';
	public getCountris() {
		const url = 'http://country.io/names.json';
		return this.http.get(this.proxy + url);
  }
  public getCapitals() {
		const url = 'http://country.io/capital.json';
		return this.http.get(this.proxy + url);
  }
  public getISO() {
		const url = 'http://country.io/iso3.json';
		return this.http.get(this.proxy + url);
  }
  public getCurrency() {
		const url = 'http://country.io/currency.json';
		return this.http.get(this.proxy + url);
  }
  public getContinents() {
		const url = 'http://country.io/continent.json';
		return this.http.get(this.proxy + url);
  }
  public getPhonesCode() {
		const url = 'http://country.io/phone.json';
		return this.http.get(this.proxy + url);
  }
}
