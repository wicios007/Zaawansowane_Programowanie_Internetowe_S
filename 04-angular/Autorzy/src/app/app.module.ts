import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AuthorsAddComponent } from './authors-add/authors-add.component';
import { AuthorsDeleteComponent } from './authors-delete/authors-delete.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AuthorsDetailsComponent } from './authors-details/authors-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorsSingleComponent } from './authors-single/authors-single.component';
import { AuthorsEditComponent } from './authors-edit/authors-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsListComponent,
    AuthorsAddComponent,
    AuthorsDeleteComponent,
    AuthorsDetailsComponent,
    AuthorsSingleComponent,
    AuthorsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    AuthorsSingleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
