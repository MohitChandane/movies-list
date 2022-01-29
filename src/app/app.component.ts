import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  showLoader: boolean = true;

  constructor(private router: Router){}
  ngOnInit(): void {
    setTimeout(() => {
      this.showLoader = false;
    }, 5000);
  }
  title = 'movies-list';
  onClickDashboard(){
    this.router.navigateByUrl('dashboard');
  }
}
