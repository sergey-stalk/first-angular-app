import { GetAllDataService } from './getAllData.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './SideBar.component.html',
  styleUrls: ['./SideBar.component.css']
})

export class SideBarComponent implements OnInit {
  countris = [];
  capitals = [];
  iso = [];
  phoneCode = [];
  continent = [];
  currency = [];
  allData = [];
  currentCard = '';
  tab = '1';
  constructor(private getAllDataService: GetAllDataService) { }
  cardOpen(currentCard) {
    this.currentCard = currentCard;
  }
  handleSwitch(event) {
    if (event === 'Countris') {
      this.tab = '1';
    } else {
      this.tab = '2';
    }
  }
  ngOnInit() {    
    this.getAllDataService.getCountris().subscribe((data) => {
      for (const key in data) {
        let item = {key:key, countri: data[key]};
        this.countris.push(item);
      }
    });
    this.getAllDataService.getContinents().subscribe((data) => {
      for (const key in data) {
        let item = {continent: data[key]};
        this.continent.push(item);
      }
    });
    this.getAllDataService.getISO().subscribe((data) => {
      for (const key in data) {
        let item = {ISO: data[key]};
        this.iso.push(item);
      }
    });
    this.getAllDataService.getPhonesCode().subscribe((data) => {
      for (const key in data) {
        let item = {phoneCode: data[key]};
        this.phoneCode.push(item);
      }
    });
    this.getAllDataService.getCapitals().subscribe((data) => {
      for (const key in data) {
        let item = {capital: data[key]};
        this.capitals.push(item);
      }
    });
		this.getAllDataService.getCurrency().subscribe((data) => {
      for (const key in data) {
        let item = {currency: data[key]};
        this.currency.push(item);
        
      }
      for (let i = 0; i < this.countris.length; i++) {
        this.allData[i] = {...this.countris[i], ...this.capitals[i], ...this.phoneCode[i], ...this.iso[i], ...this.continent[i], ...this.currency[i]}
      }
    });    
	}
}
