import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {Hero} from '@data/interface/hero.interface';
import {HeroesService} from "@core/services";
import {Router} from "@angular/router";
import {INTERNAL_ROUTES} from "@data/routes/internal.const";


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
})
export class SearchPageComponent implements OnInit {

  public heroes!: Hero[];
  formGroup!: FormGroup;
  filteredHeros!: Hero[];

  constructor(
    private _heroService: HeroesService,
    private _router: Router
  ) {}


  ngOnInit(): void {

    this.formGroup = new FormGroup({
      selectedHero: new FormControl<object | null>(null)
    });
  }


  filterCountry(event: { query: string }) {

    const query = event.query.trim();
    const formattedQuery = this.capitalizeFirstLetterOfEachWord(query);


    this._heroService.getSuggestions(formattedQuery).subscribe(hero => {
      this.filteredHeros = hero
        .filter(hero =>

          hero.superhero.startsWith(formattedQuery)
        );
      console.log('sugerecias filtradas, ', this.filteredHeros)
    })
  }

  onSelectHero(event: any) {

    const selectHero = event.value;

    if (selectHero && selectHero.id) {
      this._router.navigate([INTERNAL_ROUTES.MODULE_HEROS_DEFAULT, selectHero.id])
    }
  }

  private capitalizeFirstLetterOfEachWord( query: string): string {
    return query
      .toLowerCase()
      .replace(/\b\w/g, char => char.toUpperCase());
  }


}
