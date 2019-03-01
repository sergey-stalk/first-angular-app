import { ApiDataService } from '../../cors/api-data.service';
import { Tabs } from './../../shared/tabs';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})

export class SideBarComponent implements OnInit {
  constructor(private apiDataService: ApiDataService) { }

   // TODO: move lifecycle hooks right after constructor

  countrys = [];
  capitals = [];
  iso = [];
  phoneCode = [];
  continent = [];
  currency = [];
  allData = [];
  savedData = [];
  currentCard = '';
  tab = 'Countrys';
  filtredData = [];
  store = localStorage;
  tabs = {
    countrysTab: Tabs.countrys,
    locationsTab: Tabs.location,
  };

  cardOpen(currentCard) {
    this.currentCard = currentCard;
  }

  filterCountris(event) {
    let value = '';
    let filtred = [];
    value = event.target.value;
    this.filtredData = this.allData;
    filtred = this.allData.filter((item) => {
      return item.countri.includes(value);
    });
    this.filtredData = filtred;
  }

  handleSwitch(event) {
    this.tab = event;
  }

  getData() {
    // TODO: getting and caching data inside SideBarService
    this.apiDataService.getCountris().subscribe((data) => {
      // TODO: investigate helper method to reuse logic below
      // as example: this.countris = Utils.getArrayFromObject(data)
      for (const key in data) {
        const item = { key, countri: data[key] };
        this.countrys.push(item);
      }
    });

    this.apiDataService.getContinents().subscribe((data) => {
      for (const key in data) {
        const item = { continent: data[key] };
        this.continent.push(item);
      }
    });

    this.apiDataService.getISO().subscribe((data) => {
      for (const key in data) {
        const item = { ISO: data[key] };
        this.iso.push(item);
      }
    });

    this.apiDataService.getPhonesCode().subscribe((data) => {
      for (const key in data) {
        const item = { phoneCode: data[key] };
        this.phoneCode.push(item);
      }
    });

    this.apiDataService.getCapitals().subscribe((data) => {
      for (const key in data) {
        const item = { capital: data[key] };
        this.capitals.push(item);
      }
    });

    this.apiDataService.getCurrency().subscribe((data) => {
      for (const key in data) {
        const item = { currency: data[key] };
        this.currency.push(item);

      }
      // tslint:disable-next-line:no-increment-decrement
      for (let i = 0; i < this.countrys.length; i++) {
        // tslint:disable-next-line:max-line-length
        this.savedData[i] = { ...this.countrys[i], ...this.capitals[i], ...this.phoneCode[i], ...this.iso[i], ...this.continent[i], ...this.currency[i] };
      }

      // TODO: second action in getData method
      this.store.setItem('data', JSON.stringify(this.savedData));
    });
  }

  ngOnInit() {
    this.getData();
    this.allData = JSON.parse(this.store.data);
    if (this.filtredData.length === 0) {
      this.filtredData = this.allData;
    }
  }
}
