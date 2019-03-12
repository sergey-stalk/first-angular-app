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

  allData = [];
  currentCard = '';
  tab = 'Countrys';
  tabs = {
    countrysTab: Tabs.countrys,
    locationsTab: Tabs.location,
  };

  cardOpen(currentCard) {
    this.currentCard = currentCard;
  }

  filterCountris(event) {
    this.filterService.filterCountris(event.target.value).subscribe((data) => {
      this.allData = data;
    });
  }

  handleSwitch(event) {
    this.tab = event;
  }

  getData() {
    this.storageControlService.checkStorage().subscribe((data) => {
      this.allData = data;
    });
  }
}
