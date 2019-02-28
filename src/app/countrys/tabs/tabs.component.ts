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

  countrys = true;
  locations = false;

  handleClick(event) {
    // TODO: fix
    const activeClass = event.target.className.split(' ')[2];
    this.changeTab.emit(event.target.text);
    if (activeClass !== 'active') {
      this.countrys = !this.countrys;
      this.locations = !this.locations;
    }
  }
}
