import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environment } from '../../../environments/environments';

@Injectable({providedIn: 'root'})

export class HeroesService {


    private urlBase : string = environment.urlBase


    constructor(private _http: HttpClient) { }
    


    public getHeroes() : Observable<Hero[]>{

        return this._http.get<Hero[]>(`${this.urlBase}/heroes`)
    }
    



    public getHeroesById(id :string) : Observable<Hero | undefined>{

        return this._http.get<Hero>(`${this.urlBase}/heroes/${id}`).
        pipe(
            catchError( error => of(undefined))
        )
    
    
    }

}