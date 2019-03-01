import { Tabs } from './../../shared/tabs';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() changeTab = new EventEmitter();

  cursor = 'Countrys';
  countrys = true;
  locations = false;

  tabs: any = {
    countrysTab: Tabs.countrys,
    locationsTab: Tabs.location,
  };

  handleClick(val) {
    if (this.cursor !== val) {
      this.countrys = !this.countrys;
      this.locations = !this.locations;
      this.cursor = val;
    }

    this.changeTab.emit(val);
  }
}
