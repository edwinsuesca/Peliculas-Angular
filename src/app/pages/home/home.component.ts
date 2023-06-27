import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import {MovieModel} from '../../models/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  moviesList: Array<MovieModel> = [];
  currentPage: number = 1;

  constructor(
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    this.getMovies('now_playing', this.currentPage);
  }

  getMovies(type: string, page: number): void {
    this.moviesService.getMovies(type, page).subscribe({
      next: (res) => {
        this.moviesList = res.results;
        this.currentPage++
      }
    })
  }

  seeMoreMovies(type: string, page: number): void {
    this.moviesService.getMovies(type, page).subscribe({
      next: (res) => {
        this.moviesList = this.moviesList.concat(res.results)
        this.currentPage++
      }
    })
  }
}
