import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FirstComponent } from "./first/first.component";
import { AuthorComponent } from "./author/author.component";
import { SearchComponent } from "./search/search.component";
import { AuthorComponentComponent } from "./author-component/author-component.component";
import { AddAuthorComponent } from "./add-author/add-author.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    AuthorComponent,
    SearchComponent,
    AuthorComponentComponent,
    AddAuthorComponent,
    FormsModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchComponent,
    AddAuthorComponent,
    AuthorComponentComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
