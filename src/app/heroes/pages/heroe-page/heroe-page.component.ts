import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

 

@Component({
  selector: 'app-heroe-page',
  templateUrl: './heroe-page.component.html',
  styles: ``
})
export class HeroePageComponent implements OnInit{

  public hero? : Hero

  constructor(private _heroesService : HeroesService,
              private  _activateRouter : ActivatedRoute,
              private _router: Router){

  }

  ngOnInit(): void {
    
      this._activateRouter.params
      .pipe(
        switchMap(({id})=> this._heroesService.getHeroesById(id))
      ).subscribe( hero => {
          
        if(!hero) return this._router.navigate(['/heroes/list'])
          
        this.hero= hero;
        console.log(hero)
        return
        }
      )
  }

}
