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
import { Zad5DetailsComponent } from './zad5-details/zad5-details.component';
import { Zad5DeleteComponent } from './zad5-delete/zad5-delete.component';
import { Zad19Component } from './forms/zad19/zad19.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Zad20Component } from './forms/zad20/zad20.component';
import { Zad7SecondComponent } from './zad7-second/zad7-second.component';

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
    Zad14SecondComponent,
    Zad5DetailsComponent,
    Zad5DeleteComponent,
    Zad19Component,
    Zad20Component,
    Zad7SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
