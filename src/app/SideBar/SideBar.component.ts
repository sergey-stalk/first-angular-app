import { GetCountrysService } from './getCountrys.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-SideBar',
  templateUrl: './SideBar.component.html',
  styleUrls: ['./SideBar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private _getCountrysService: GetCountrysService) { }

  ngOnInit() {
		this._getCountrysService.getAll().subscribe(data => {console.log(data)})
  }

}
