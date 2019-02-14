import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './SideBar/SideBar.component';
import { HeaderComponent } from './Header/Header.component';

@NgModule({
   declarations: [
      AppComponent,
      SideBarComponent,
      HeaderComponent
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
