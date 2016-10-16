import { Component }      from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist }         from '../../models/artist';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html'
})

export class SearchComponent {
  private search: string;
  private searchRes: Artist[];

  constructor(private _spotifyService: SpotifyService){
  }

  searchMusic(){

    this._spotifyService.searchMusic(this.search)
    .subscribe(res => {
      this.searchRes = res.artists.items;
      // console.log(res.artists.items);
    });

  }
 }
