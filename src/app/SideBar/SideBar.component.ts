import { GetCountrysService } from './getCountrys.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-SideBar',
  templateUrl: './SideBar.component.html',
  styleUrls: ['./SideBar.component.css']
})

export class SideBarComponent implements OnInit {
	_data: any;
  constructor(private getCountrysService: GetCountrysService) { }
  ngOnInit() {
		
		this.getCountrysService.getAll().subscribe(data => this._data = data);
	}
}
