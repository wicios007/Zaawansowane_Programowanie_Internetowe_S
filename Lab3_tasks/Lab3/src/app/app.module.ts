import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TasksComponent } from "./tasks/tasks.component";
import { Zad5Component } from "./zad5/zad5.component";
import { Zad7i8Component } from "./zad7i8/zad7i8.component";
import { Zad9do11Component } from "./zad9do11/zad9do11.component";
import { Zad12i13FirstComponent } from "./zad12i13-first/zad12i13-first.component";
import { Zad12i13SecondComponent } from "./zad12i13-second/zad12i13-second.component";
import { Zad1416Component } from "./zad1416/zad1416.component";
import { Zad1416SecondComponent } from "./zad1416-second/zad1416-second.component";
import { Zad5SecondComponent } from "./zad5-second/zad5-second.component";
import { Zad5ThirdComponent } from "./zad5-third/zad5-third.component";
import { Zad17Component } from "./zad17/zad17.component";
import { Zad17SecondComponent } from "./zad17-second/zad17-second.component";
import { InputExParentComponent } from "./input-ex-parent/input-ex-parent.component";
import { InputExChildComponent } from "./input-ex-child/input-ex-child.component";
import { Zad19Component } from "./zad19/zad19.component";
import { Zad20Component } from "./zad20/zad20.component";
import { Zad21Component } from "./zad21/zad21.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ServiceService } from "./zad7i8/service.service";
import { Zad7i8secondComponent } from "./zad7i8second/zad7i8second.component";
import { LinksService } from "./services/links.service";
import { Zad27Component } from "./zad27/zad27.component";
import { Zad27AddLinkFormComponent } from "./zad27-add-link-form/zad27-add-link-form.component";
import { Zad30parentComponent } from "./zad30/zad30parent/zad30parent.component";
import { HomeComponent } from "./zad30/home/home.component";
import { OnasComponent } from "./zad30/onas/onas.component";
import { KontaktComponent } from "./zad30/kontakt/kontakt.component";

const routes: Routes = [
  { path: "", component: Zad30parentComponent },
  {
    path: "",
    component: Zad30parentComponent,
    children: [{ path: "home", component: HomeComponent }],
  },
  {
    path: "",
    component: Zad30parentComponent,
    children: [{ path: "oNas", component: OnasComponent }],
  },
  {
    path: "",
    component: Zad30parentComponent,
    children: [{ path: "kontakt", component: KontaktComponent }],
  },
];
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    Zad5Component,
    Zad7i8Component,
    Zad9do11Component,
    Zad12i13FirstComponent,
    Zad12i13SecondComponent,
    Zad1416Component,
    Zad1416SecondComponent,
    Zad5SecondComponent,
    Zad5ThirdComponent,
    Zad17Component,
    Zad17SecondComponent,
    InputExParentComponent,
    InputExChildComponent,
    Zad19Component,
    Zad20Component,
    Zad21Component,
    Zad7i8secondComponent,
    Zad27Component,
    Zad27AddLinkFormComponent,
    Zad30parentComponent,
    HomeComponent,
    OnasComponent,
    KontaktComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [ServiceService, LinksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
