import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '../shared/movie';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {
  movies$: Observable<Movie[]>;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movies$ = this.movieService.getMovies();
  }

}
