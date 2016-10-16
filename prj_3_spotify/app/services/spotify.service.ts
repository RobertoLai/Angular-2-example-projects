import { Injectable }     from '@angular/core';
import { Http }           from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  private searchUrl:string;
  private artistUrl:string;
  private albumsUrl:string;
  private albumUrl:string;

  constructor(private _http:Http){

  }

  searchMusic(str:string, type='artist'){
    let url = 'https://api.spotify.com/v1/search?query=' + str;
    url += '&offset=0';
    url += '&limit=20';
    url += '&type=' + type;
    url += '&market=de';
    this.searchUrl = url;

    return this._http.get(this.searchUrl)
           .map(res => res.json());
  }

  getArtist(id:string){
    this.artistUrl = 'https://api.spotify.com/v1/artists/' + id ;
    return this._http.get(this.artistUrl)
           .map(res => res.json());
  }

  getAlbums(artistId:string){
    let albumsUrl = 'https://api.spotify.com/v1/artists/';
    albumsUrl += artistId;
    albumsUrl += '/albums';

    this.albumsUrl = albumsUrl;

    return this._http.get(this.albumsUrl)
           .map(res => res.json());
  }

  getAlbum(id:string){        
    this.albumUrl = 'https://api.spotify.com/v1/albums/'  + id;

    return this._http.get(this.albumUrl)
           .map(res => res.json());
  }


}
