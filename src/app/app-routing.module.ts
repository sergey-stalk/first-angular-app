import { GridComponent } from './grid/grid.component';
import { ChartComponent } from './chart/chart.component';
import { MainComponent } from './main/main.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'grid', component: GridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
