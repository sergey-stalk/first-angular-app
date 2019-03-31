import { StorageControlService } from './countrys/storage-control.service';
import { FilterService } from './countrys/side-bar/filter.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './countrys/side-bar/side-bar.component';
import { CountrysListComponent } from './countrys/countrys-list/countrys-list.component';
import { TabsComponent } from './countrys/tabs/tabs.component';
import { LocationComponent } from './countrys/location/location.component';
import { DetailComponent } from './countrys/detail/detail.component';
import { ChartComponent } from './chart/chart.component';
import { GridComponent } from './grid/grid.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    CountrysListComponent,
    TabsComponent,
    DetailComponent,
    LocationComponent,
    ChartComponent,
    GridComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    StorageControlService,
    FilterService,
  ] ,
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
