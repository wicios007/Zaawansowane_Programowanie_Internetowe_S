import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OnasComponent } from './onas/onas.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullComponent } from './full/full.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OnasComponent,
    KontaktComponent,
    FullComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
