import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthorsAddComponent } from './authors-add/authors-add.component';
import { AuthorsDeleteComponent } from './authors-delete/authors-delete.component';
import { AuthorsDetailsComponent } from './authors-details/authors-details.component';
import { AuthorsEditComponent } from './authors-edit/authors-edit.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorsListComponent,
    children:
    [
      {
        path: 'add',
        component: AuthorsAddComponent
      },
      {
        path: 'details/:id',
        component: AuthorsDetailsComponent
      },
      {
        path: 'delete/:id',
        component: AuthorsDeleteComponent
      },
      {
        path: 'edit/:id',
        component: AuthorsEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
