import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './SideBar/sideBar.component';
import { HeaderComponent } from './Header/header.component';
import { CountrisListComponent } from './countrisList/countrisList.component';
import { TabsComponent } from './tabs/tabs.component';
import { MoreInformationComponent } from './moreInformation/moreInformation.component';

@NgModule({
   declarations: [
      AppComponent,
      SideBarComponent,
      HeaderComponent,
      CountrisListComponent,
      TabsComponent,
      MoreInformationComponent
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
