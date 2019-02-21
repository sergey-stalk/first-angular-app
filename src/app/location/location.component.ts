import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor() { }
  @Output() cardOpen = new EventEmitter();
  @Input('allData') data;
  currentCard = '';

  ngOnInit() {
  }
  card(event) {
    this.currentCard = this.data[Number(event.currentTarget.className.split(" ")[0])]
    this.cardOpen.emit(this.currentCard);
  }
}
