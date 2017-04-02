import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Album } from './album'
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable() //decorates following class as a dependency injector
export class AlbumsService {
  constructor(private http: Http) {}

  private albumsUrl = 'http://jsonplaceholder.typicode.com/albums';

  getAlbums() : Observable<Album[]> {
    return this.http.get( this.albumsUrl )
      .map( (res:Response) => res.json() )
        .catch( (error:any) => Observable.throw(error.json().error || 'Server error') )
  }
}