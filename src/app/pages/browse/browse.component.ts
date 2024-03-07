import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieCategoryComponent } from '../../components/movie-category/movie-category.component';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [HeaderComponent, MovieCategoryComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {
  movieService= inject(MovieService);
  popularMovies :any[] =[];
  topRatedMovies :any[] =[]; 
  upcomingMovies:any[]=[];

  ngOnInit(){
    this.movieService.getPopularMovies().subscribe((res:any)=>{
      this.popularMovies= res.results;
    })

    this.movieService.getTopRatedMovies().subscribe((res:any)=>{
      this.topRatedMovies= res.results;
    })
    
    this.movieService.getUpcomingMovies().subscribe((res:any)=>{
      this.upcomingMovies= res.results;
      console.log(this.upcomingMovies);
    })
  }
}
