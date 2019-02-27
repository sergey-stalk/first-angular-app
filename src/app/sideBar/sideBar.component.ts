import { FilterService } from './filter.service';
import { ApiDataService } from './apiData.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './sideBar.component.html',
  styleUrls: ['./sideBar.component.scss']
})

export class SideBarComponent implements OnInit {
  countris = [];
  capitals = [];
  iso = [];
  phoneCode = [];
  continent = [];
  currency = [];
  allData = [];
  savedData = [];
  currentCard = '';
  tab = '1';
  filtredData = [];
  store = localStorage;

  constructor(private apiDataService: ApiDataService, private filter: FilterService) { }

  cardOpen(currentCard) {
    this.currentCard = currentCard;
  }

  filterCountris(event) {
    let value = '';
    let filtred = [];
    value = event.target.value;
    if (value === '') {
      this.filtredData = this.allData;
    } else {
      let arrValue = value.split('');
      let firstLetter = arrValue[0].toUpperCase();
      arrValue[0] = firstLetter;
      value = arrValue.join('');
      filtred = this.allData.filter((item) => {
        return item.countri.includes(value);
      });
      this.filtredData = filtred;
    }
  }
  handleSwitch(event) {
    if (event === 'Countris') {
      // TODO: Make enums for numbers below
      this.tab = '1';
    } else {
      this.tab = '2';
    }
  }
  getData(){
    // TODO: getting and caching data inside SideBarService
    this.apiDataService.getCountris().subscribe((data) => {
      // TODO: investigate helper method to reuse logic below
      // as example: this.countris = Utils.getArrayFromObject(data)
      for (const key in data) {
        let item = {key:key, countri: data[key]};
        this.countris.push(item);
      }
    });
    this.apiDataService.getContinents().subscribe((data) => {
      for (const key in data) {
        let item = {continent: data[key]};
        this.continent.push(item);
      }
    });
    this.apiDataService.getISO().subscribe((data) => {
      for (const key in data) {
        let item = {ISO: data[key]};
        this.iso.push(item);
      }
    });
    this.apiDataService.getPhonesCode().subscribe((data) => {
      for (const key in data) {
        let item = {phoneCode: data[key]};
        this.phoneCode.push(item);
      }
    });
    this.apiDataService.getCapitals().subscribe((data) => {
      for (const key in data) {
        let item = {capital: data[key]};
        this.capitals.push(item);
      }
    });
		this.apiDataService.getCurrency().subscribe((data) => {
      for (const key in data) {
        let item = {currency: data[key]};
        this.currency.push(item);

      }
      for (let i = 0; i < this.countris.length; i++) {
        this.savedData[i] = {...this.countris[i], ...this.capitals[i], ...this.phoneCode[i], ...this.iso[i], ...this.continent[i], ...this.currency[i]}
      }

      // TODO: second action in getData method
      this.store.setItem('data', JSON.stringify(this.savedData));
    });
  }

  // TODO: move lifecycle hooks right after constructor
  ngOnInit() {
    this.getData();
    this.allData = JSON.parse(this.store.data);
    if (this.filtredData.length === 0) {
      this.filtredData = this.allData;
    }
	}
}
