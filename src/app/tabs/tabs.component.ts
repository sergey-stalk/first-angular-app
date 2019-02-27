import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  countris = true;
  locations = false;
  constructor() { }
  @Output() changeTab = new EventEmitter();
  ngOnInit() {
  }
  handleClick(event) {
    // TODO: fix
    const activeClass = event.target.className.split(" ")[2];
    const value = event.target.text;
    this.changeTab.emit(value);
    if (activeClass !== 'active') {
      this.countris = !this.countris;
      this.locations = !this.locations;
    }
  }
}
