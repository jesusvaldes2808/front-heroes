import {Component, OnInit} from '@angular/core';

import {Hero} from '@data/interface/hero.interface';
import {HeroesService} from "@core/services";

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl:'list-page-component.scss'

})
export class ListPageComponent implements OnInit {

  public heroInterface!: Hero [];

  constructor(private _heroServices: HeroesService) {
  }

  ngOnInit(): void {

    this.getHeros();
  }

  private getHeros(): void {

    this._heroServices.getHeroes().subscribe({
        next: (hero) => {
          this.heroInterface = hero;
        }, error: (err) => {
          console.error('Hubo un error en la petición ', err)
        }
      }
    )
  }

}
