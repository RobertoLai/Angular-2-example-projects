import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private username:string;
  private client_id =  "";//INSERT HERE YOUR CLIENT_ID
  private client_secret = "";//INSERT HERE YOUR CLIENT_SECRET

  constructor(private _http: Http){
    console.log('GithubService Ready...');
    this.username = '';
  }

  getUser(){
    return this._http.get('http://api.github.com/users/'
    + this.username
    + '?client-id=' + this.client_id
    + '&client_secret=' + this.client_secret
  )
   .map(res => res.json())
  }

  getRepos(){
    return this._http.get('http://api.github.com/users/'
    + this.username + '/repos'
    +'?client-id=' + this.client_id
    + '&client_secret=' + this.client_secret
  )
    .map(res => res.json())
  }

  updateUser(username:string){
    this.username = username;
  }


}
