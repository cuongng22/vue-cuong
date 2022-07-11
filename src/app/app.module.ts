import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './bai_02_component/movies/movies.component';
import { Bai4Component } from './bai_04_ngFor/bai4/bai4.component';
import { Bai05EvenbindingComponent } from './bai05-evenbinding/bai05-evenbinding.component';
import { Bai06NgIfComponent } from './bai06-ng-if/bai06-ng-if.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    Bai4Component,
    Bai05EvenbindingComponent,
    Bai06NgIfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
