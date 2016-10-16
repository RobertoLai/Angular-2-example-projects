import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms'
import { HttpModule }       from '@angular/http';

import { AppComponent }     from './app.component';

import { HomeComponent }    from './components/home/home.component';
import { ArtistComponent }  from './components/artist/artist.component';
import { AlbumComponent }   from './components/album/album.component';
import { AboutComponent }   from './components/about/about.component';
import { SearchComponent }  from './components/search/search.component';
import { NavbarComponent }  from './components/navbar/navbar.component';

import { routing }            from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent ,
    HomeComponent ,
    ArtistComponent ,
    AlbumComponent ,
    AboutComponent ,
    SearchComponent ,
    NavbarComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
