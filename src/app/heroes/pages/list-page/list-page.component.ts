import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
  
})
export class ListPageComponent implements OnInit{

  public hero : Hero [] =[];

  constructor(private _heroServices: HeroesService){}

  ngOnInit(): void {
      
    this._heroServices.getHeroes().subscribe( heroes =>
      this.hero= heroes
    )
  }

}
