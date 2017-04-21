import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing';
import { CountriesComponent } from './countries.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, CountriesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
