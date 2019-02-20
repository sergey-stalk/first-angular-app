import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-countris-list',
  templateUrl: './countrisList.component.html',
  styleUrls: ['./countrisList.component.css']
})
export class CountrisListComponent implements OnInit {
  constructor() { }
  @Input('allData') data;
  currentValue = '';
  ngOnInit() {
  }
  checkNumber(event) {
    this.currentValue = this.data[Number(event.currentTarget.className[0])]
    console.log(this.currentValue);
  }

}
