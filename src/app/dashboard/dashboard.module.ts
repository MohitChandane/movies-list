import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgxShimmerLoadingModule } from  'ngx-shimmer-loading';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AllMoviesComponent } from './all-movies/all-movies.component';


@NgModule({
  declarations: [
    AllMoviesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    // NgxShimmerLoadingModule
  ]
})
export class DashboardModule { }
