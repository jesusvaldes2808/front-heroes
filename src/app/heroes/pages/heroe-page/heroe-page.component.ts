import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {delay, switchMap} from 'rxjs';

import {HeroesService} from "@core/services";
import {Hero} from '@data/interface/hero.interface';
import {INTERNAL_ROUTES} from "@data/routes/internal.const";


@Component({
  selector: 'app-heroe-page',
  templateUrl: './heroe-page.component.html',
  styles: ``
})
export class HeroePageComponent implements OnInit {

  public hero?: Hero

  constructor(private _heroesService: HeroesService,
              private _activateRouter: ActivatedRoute,
              private _router: Router
  ) { }

  ngOnInit(): void {
    this.getHeroesById();

  }

  private getHeroesById(): void {
    this._activateRouter.params
      .pipe(
        delay(500),
        switchMap(({id}) => this._heroesService.getHeroesById(id)
        ))
      .subscribe((hero) => {

        if (!hero) return this._router.navigate([INTERNAL_ROUTES.PAGE_HERO_LIST_ID]);
        this.hero = hero;
        return;

      })
  }


  public goBack(): void {

    this._router.navigateByUrl(INTERNAL_ROUTES.PAGE_HERO_LIST_ID)
  }

}
