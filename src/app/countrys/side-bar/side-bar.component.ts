import { FilterService } from './../../shared/filter.service';
import { StorageControlService } from '../../shared/storage-control.service';
import { Tabs } from './../../shared/tabs';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})

export class SideBarComponent implements OnInit {

  constructor(
    private storageControlService: StorageControlService,
    private filterService: FilterService) { }

  ngOnInit() {
    this.getData();
  }

  allData:any = [];
  currentCard = '';
  tab = 'Countrys';
  tabs = {
    countrysTab: Tabs.countrys,
    locationsTab: Tabs.location,
  };

  cardOpen(currentCard) {
    this.currentCard = currentCard;
  }

<<<<<<< HEAD
  filterCountrys(event) {
    this.allData = this.filterService.filterCountrys(event.target.value);
=======
  filterCountris(event) {
    this.filterService.filterCountris(event.target.value).subscribe((data) => {
      this.allData = data;
    });
>>>>>>> f2a3e3faa4e1160ca42230c7cc2b731f2e77042a
  }

  handleSwitch(event) {
    this.tab = event;
  }

  getData() {
<<<<<<< HEAD
    this.storageControlService.callStorage().subscribe((data) => {
      this.allData = data;
      console.log(this.allData);
      
=======
    this.storageControlService.checkStorage().subscribe((data) => {
      this.allData = data;
>>>>>>> f2a3e3faa4e1160ca42230c7cc2b731f2e77042a
    });
  }
}
