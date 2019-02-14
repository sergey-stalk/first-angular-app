import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})


export class GetCountrysService {

constructor(private http: HttpClient) { }

	public getAll() {
		const proxy = "https://cors-anywhere.herokuapp.com/";
		const url = "http://country.io/names.json";
		return this.http.get(proxy + url);
	}

}
