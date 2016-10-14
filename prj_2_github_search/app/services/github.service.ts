import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private username:string;

  //INSERT YOUR CLIENT_ID HERE
  private client_id =  "";

  //INSERT YOUR CLIENT_SECRET HERE 
  private client_secret = "";

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
