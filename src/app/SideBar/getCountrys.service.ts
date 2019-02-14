import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
Headers("Access-Control-Allow-Origin", "*")
@Injectable({
  providedIn: 'root'
})


export class GetCountrysService {

constructor(private _http: HttpClient) { }

	public getAll() {
		return this._http.get('http://country.io/names.json');
	}

}
