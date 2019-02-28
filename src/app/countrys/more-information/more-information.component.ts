import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-more-information',
  templateUrl: './more-information.component.html',
  styleUrls: ['./more-information.component.scss'],
})
export class MoreInformationComponent implements OnInit {

  constructor() { }
  @Input() card;

  ngOnInit() {
  }

}
