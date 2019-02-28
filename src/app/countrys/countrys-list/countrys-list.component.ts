import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-countrys-list',
  templateUrl: './countrys-list.component.html',
  styleUrls: ['./countrys-list.component.scss'],
})
export class CountrysListComponent implements OnInit {
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
