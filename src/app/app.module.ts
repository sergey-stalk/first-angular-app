import { CacheService } from './cors/cache.service';
import { ApiDataService } from './cors/api-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './cors/header/header.component';
import { SideBarComponent } from './countrys/side-bar/side-bar.component';
import { CountrysListComponent } from './countrys/countrys-list/countrys-list.component';
import { TabsComponent } from './countrys/tabs/tabs.component';
import { LocationComponent } from './countrys/location/location.component';
import { MoreInformationComponent } from './countrys/more-information/more-information.component';
import { ChartComponent } from './chart/chart.component';
import { GridComponent } from './grid/grid.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    CountrysListComponent,
    TabsComponent,
    MoreInformationComponent,
    LocationComponent,
    ChartComponent,
    GridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ApiDataService,
    CacheService,
  ] ,
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
