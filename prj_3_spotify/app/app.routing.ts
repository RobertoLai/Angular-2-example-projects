import {ModuleWithProviders}    from '@angular/core';
import {Routes, RouterModule}   from '@angular/router';

import { HomeComponent }        from './components/home/home.component';
import { SearchComponent }      from './components/search/search.component';
import { AboutComponent }       from './components/about/about.component';
import { ArtistComponent }      from './components/artist/artist.component';
import { AlbumComponent }      from './components/album/album.component';

const appRoutes: Routes = [
  {
    path:'',
    component: SearchComponent
  },
  {
    path:'search',
    component: SearchComponent
  },
  {
    path:'artist/:id',
    component: ArtistComponent
  },
  {
    path:'album/:id',
    component: AlbumComponent
  },
  {
    path:'home',
    component: SearchComponent //HomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'**',
    component: SearchComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
