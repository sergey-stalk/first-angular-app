import { GetCountrysService } from './getCountrys.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-SideBar',
  templateUrl: './SideBar.component.html',
  styleUrls: ['./SideBar.component.css']
})

export class SideBarComponent implements OnInit {
	countris = []
  constructor(private getCountrysService: GetCountrysService) { }
  ngOnInit() {
		this.getCountrysService.getAll().subscribe((data) => {
      for (const key in data) {
        let item = {key:key, value: data[key]}
        this.countris.push(item)
      }
      console.log(this.countris)
    });
	}
}
