import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-countris-list',
  templateUrl: './countrisList.component.html',
  styleUrls: ['./countrisList.component.scss'],
})
export class CountrisListComponent implements OnInit {
  @Output() cardOpen = new EventEmitter();

  // TODO: make @Input() data; or @Input() filtredData;
  @Input('filtredData') data;

  constructor() { }
  currentCard = '';

  ngOnInit() {
  }
  card(event) {
    this.currentCard = this.data[Number(event.currentTarget.className.split(' ')[0])];
    this.cardOpen.emit(this.currentCard);
  }

}
