import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-more-information',
  templateUrl: './moreInformation.component.html',
  styleUrls: ['./moreInformation.component.scss']
})
export class MoreInformationComponent implements OnInit {

  constructor() { }
  @Input() card;

  ngOnInit() {
  }

}
