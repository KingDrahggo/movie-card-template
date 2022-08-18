import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieCardTemplateComponent } from './movie-card-template/movie-card-template.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MovieCardTemplateComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
