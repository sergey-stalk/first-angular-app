import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-countris-list',
  templateUrl: './countrisList.component.html',
  styleUrls: ['./countrisList.component.scss']
})
export class CountrisListComponent implements OnInit {
  constructor() { }
  @Output() cardOpen = new EventEmitter();
  @Input('filtredData') data;
  currentCard = '';

  ngOnInit() {
  }
  card(event) {
    this.currentCard = this.data[Number(event.currentTarget.className.split(" ")[0])]
    this.cardOpen.emit(this.currentCard);
  }

}
