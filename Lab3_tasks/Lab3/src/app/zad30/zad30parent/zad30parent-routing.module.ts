import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { KontaktComponent } from "../kontakt/kontakt.component";
import { OnasComponent } from "../onas/onas.component";

const routes: Routes = [
  { path: "http://localhost:4200/home", component: HomeComponent },
  { path: "http://localhost:4200/oNas", component: OnasComponent },
  { path: "http://localhost:4200/kontakt", component: KontaktComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class Zad30parentRouting {}
