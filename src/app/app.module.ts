import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// import { NgxShimmerLoadingModule } from  'ngx-shimmer-loading';

// import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    // AngularFontAwesomeModule
    // NgxShimmerLoadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
