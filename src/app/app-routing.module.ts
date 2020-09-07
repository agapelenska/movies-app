import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';

const ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'movies',
        pathMatch: 'full'
      },
      {
        path: 'movies',
        component: MoviesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
