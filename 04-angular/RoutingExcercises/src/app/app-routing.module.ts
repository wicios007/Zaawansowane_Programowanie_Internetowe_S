import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './full/full.component';
import { HomeComponent } from './home/home.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { OnasComponent } from './onas/onas.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children:[
      {path : 'home', component : HomeComponent},
      {path : 'oNas', component : OnasComponent},
      {path : 'kontakt', component : KontaktComponent}
    ]
  },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   children: [
  //     {path : 'oNas', component : OnasComponent},
  //     {path : 'kontakt', component : KontaktComponent}
  //   ]
  // },
  // {
  //   path: 'oNas',
  //   component: OnasComponent
  // },
  // {
  //   path: 'kontakt',
  //   component: KontaktComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
