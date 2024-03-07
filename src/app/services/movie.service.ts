import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getPopularMovies(){
    return this.httpClient.get("https://api.themoviedb.org/3/movie/popular",{
      headers:{
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTQ2MjllYjU3NTQ4MWY3YjI3ODJiYjFhZWU1YmJkZiIsInN1YiI6IjY1ZTgwMTYxZWE0MjYzMDE0ODIxMWVmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iqlslYL5LfloSdf2tlulDkedEjUniELBFydmyeiv7hs'
      }
    })
  }
  getTopRatedMovies(){
    return this.httpClient.get("https://api.themoviedb.org/3/movie/top_rated",{
      headers:{
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTQ2MjllYjU3NTQ4MWY3YjI3ODJiYjFhZWU1YmJkZiIsInN1YiI6IjY1ZTgwMTYxZWE0MjYzMDE0ODIxMWVmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iqlslYL5LfloSdf2tlulDkedEjUniELBFydmyeiv7hs'
      }
    })
  }
  getUpcomingMovies(){
    return this.httpClient.get("https://api.themoviedb.org/3/movie/upcoming",{
      headers:{
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTQ2MjllYjU3NTQ4MWY3YjI3ODJiYjFhZWU1YmJkZiIsInN1YiI6IjY1ZTgwMTYxZWE0MjYzMDE0ODIxMWVmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iqlslYL5LfloSdf2tlulDkedEjUniELBFydmyeiv7hs'
      }
    })
  }
}
