import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{
  constructor(
    private moviesService:MoviesService,
    private route:ActivatedRoute,
  ){}
  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
          const id = params['id'];
          this.getMovie(id);
      }
    });
  }


  getMovie(id:string) {
    this.moviesService.getMovie(id).subscribe({
      next: (res) => {
        console.log(res);
      } 
    });
  }
}
