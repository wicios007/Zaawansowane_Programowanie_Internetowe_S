import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Zad1Component } from './zad1/zad1.component';
import { Zad5Component } from './zad5/zad5.component';
import { Zad7Component } from './zad7/zad7.component';
import { Zad9Component } from './zad9/zad9.component';
import { Zad12FirstComponent } from './zad12-first/zad12-first.component';
import { Zad12SecondComponent } from './zad12-second/zad12-second.component';
import { Zad14FirstComponent } from './zad14-first/zad14-first.component';
import { Zad14SecondComponent } from './zad14-second/zad14-second.component';

@NgModule({
  declarations: [
    AppComponent,
    Zad1Component,
    Zad5Component,
    Zad7Component,
    Zad9Component,
    Zad12FirstComponent,
    Zad12SecondComponent,
    Zad14FirstComponent,
    Zad14SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
