import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,
    public router: Router) { }

    getPopularMovies(page: any): Observable<any>{
     return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=634f44f17717a2bdb1aaf4a76babe01f&language=en-US&page='+ page);
    }

    getTopRatedMovies(page: any): Observable<any>{
      return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=634f44f17717a2bdb1aaf4a76babe01f&language=en-US&page'+page);
     }
}
