import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';

import { HomeHindiComponent } from './components/homeHindi';
import { HomeEnglishComponent } from './components/homeEnglish';
import { AppRoutingModule } from './app-routing.modules';

@NgModule ({
  declarations: [
    AppComponent,
    HomeHindiComponent,
    HomeEnglishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers : [],
  bootstrap: [AppComponent]
})
export class AppModule { }
