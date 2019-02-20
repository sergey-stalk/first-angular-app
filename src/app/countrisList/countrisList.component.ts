import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-countris-list',
  templateUrl: './countrisList.component.html',
  styleUrls: ['./countrisList.component.css']
})
export class CountrisListComponent implements OnInit {
  constructor() { }
  @Input('allData') data;

  ngOnInit() {
    console.log(this.data)
  }

}
