import { StorageControlService } from '../storage-control.service';

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  constructor(private storageControlService: StorageControlService) { }

  @Input() card;
  @Input() allData;
  @Output() reset = new EventEmitter();

  ngOnInit() {
  }

  change = '';

  saveData(form: NgForm)  {
    this.allData.forEach((el, i) => {
      if (el.key === this.card.key) {
        this.storageControlService.updateStorage(form.value, i);
        this.card = form.value;
        this.reset.emit();
      }
    });
    this.change = '';
  }
}
