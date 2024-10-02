import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, Observable, of} from 'rxjs';

import {Hero} from "@data/interface/hero.interface";
import {HERO} from "@data/routes/http.const";
import {environments} from "@environments/environments";

@Injectable({providedIn: 'root'})

export class HeroesService {


  private urlBase = environments;


  constructor(private _http: HttpClient) {
  }


  public getHeroes(): Observable<Hero[]> {

    return this._http.get<Hero[]>(`${HERO.GET_HEROS}`)
  }


  public getHeroesById(id: string): Observable<Hero | undefined> {

    return this._http.get<Hero>(`${HERO.GET_HERO_ID(id)}`)
      .pipe(
        catchError(error => of(undefined))
      )
  }



  public getSuggestions(query: string): Observable<Hero[]> {

    return this._http.get<Hero[]>(`${HERO.GET_HERO_SUGGESTION(query)}`)
  }



  public addHero(hero: Hero): Observable<Hero> {

    return this._http.post<Hero>(`${HERO.GET_HEROS}`, hero)
  }



  public updateHero(id: string,hero: Hero): Observable<Hero> {

    return this._http.put<Hero>(`${ HERO.UPDATE_HERO }/${id}`, hero );
  }



  public deleteHero(id: string): Observable<boolean> {

    return this._http.delete<Hero>(`${HERO.DELETE_HERO_ID(id)}`)
      .pipe(
        map(resp => true),
        catchError(err => of(false)),
      );
  }

}
