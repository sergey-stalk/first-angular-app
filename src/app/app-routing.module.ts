import { GridComponent } from './grid/grid.component';
import { ChartComponent } from './chart/chart.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideBarComponent } from './countrys/side-bar/side-bar.component';

const routes: Routes = [
  { path: '', component: SideBarComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'grid', component: GridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
