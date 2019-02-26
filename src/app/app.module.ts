import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './sideBar/sideBar.component';
import { HeaderComponent } from './header/header.component';
import { CountrisListComponent } from './countrisList/countrisList.component';
import { TabsComponent } from './tabs/tabs.component';
import { MoreInformationComponent } from './moreInformation/moreInformation.component';
import { LocationComponent } from './location/location.component';
import { MainComponent } from './main/main.component';
import { ChartComponent } from './chart/chart.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
   declarations: [
      AppComponent,
      SideBarComponent,
      HeaderComponent,
      CountrisListComponent,
      TabsComponent,
      MoreInformationComponent,
      LocationComponent,
      MainComponent,
      ChartComponent,
      GridComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
