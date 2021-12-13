import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Zad01Component } from './zad01/zad01.component';
import { Zad05Component } from './zad05/zad05.component';
import { Zad07Component } from './zad07/zad07.component';
import { Zad09Component } from './zad09/zad09.component';
import { Zad12c1Component } from './zad12c1/zad12c1.component';
import { Zad12c2Component } from './zad12c2/zad12c2.component';
import { Zad14c1Component } from './zad14c1/zad14c1.component';
import { Zad14c2Component } from './zad14c2/zad14c2.component';

@NgModule({
  declarations: [
    AppComponent,
    Zad01Component,
    Zad05Component,
    Zad07Component,
    Zad09Component,
    Zad12c1Component,
    Zad12c2Component,
    Zad14c1Component,
    Zad14c2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
