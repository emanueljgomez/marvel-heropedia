import { Injectable } from '@angular/core';
// Imports:
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })

export class HeroesService {

  // Variables:
  PUBLIC_KEY = 'ddbe649e8f64b8a35ba2a6203c2e9b86';
  // HASH is generated by passing this string combination: 1 + Private Key + Public Key
  // through a MD5 Hash Generator ( https://letmegooglethat.com/?q=MD5+hash+generator )
  // The Public and Private Keys are provided by the API ( https://developer.marvel.com/ )
  HASH = '1c820bbadd4cd42eb3139d95fe35aa64';
  URL_API = `https:gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}&offset=0&limit=100`; // '&limit=100' controls amount of elements returned
  URL_API_2 = `https:gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}&offset=100&limit=100`;

  // HTTP constructor:
  constructor( private http: HttpClient ) { }

  // HTTP methods with Observables:
  public getAllHeroes(): Observable<any> {
    return this.http.get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results))
  }

  public getAllHeroes200(): Observable<any> {
    return this.http.get<any>(this.URL_API_2)
      .pipe(map((data: any) => data.data.results))
  }

}
