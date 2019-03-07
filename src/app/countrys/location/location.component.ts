import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {

  constructor() { }
  @Output() cardOpen = new EventEmitter();
  @Input() allData;
  currentCard = '';

  ngOnInit() {
  }
  card(index) {
    this.currentCard = this.allData[index];
    this.cardOpen.emit(this.currentCard);
  }
}
