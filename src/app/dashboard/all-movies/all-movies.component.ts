import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit {
  extractedMovies: any;
  extractedTopRatedMovies: any;
  loader = true;
  showLoader: boolean = false;
  atBottom: boolean = false;
  page: any = 1;
  constructor(private apiService: ApiService,
    @Inject(DOCUMENT) private document: Document
    ) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const offset = this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    console.log(offset);
  }

  ngOnInit(): void {
    this.getAllPopularMovies();
    this.getAllTopRatedMovies()

  }

  getAllPopularMovies(){
    this.apiService.getPopularMovies(this.page).subscribe((response) => {
      let results = response.results;
      this.extractedMovies = results.map((item: any) => {
        return {name: item.title, date: item.release_date, rating: item.vote_average};
      })
    }, error => {})
  }

  getAllTopRatedMovies(){
    this.apiService.getTopRatedMovies(this.page).subscribe((response) => {
      let results = response.results;
      this.extractedTopRatedMovies = results.map((item: any) => {
        return {name: item.title, date: item.release_date, rating: item.vote_average};
      })
    }, error => {})
  }
  onScroll(data : any){
    if ((data.target.scrollHeight - 5) <= data.target.scrollTop + data.target.offsetHeight) {
      this.atBottom = true;
      this.page = this.page +1
      // this.callFuntion();
    } else {
      this.atBottom = false;
    }
  }

}
