import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-countrys-list',
  templateUrl: './countrys-list.component.html',
  styleUrls: ['./countrys-list.component.scss'],
})
export class CountrysListComponent implements OnInit {

  @Output() cardOpen = new EventEmitter();
  @Input() allData;

  constructor() { }

  currentCard = '';

  ngOnInit() {
  }

  card(index) {
    this.currentCard = this.allData[index];
    this.cardOpen.emit(this.currentCard);
  }
}
