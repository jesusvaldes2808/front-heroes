import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {catchError, filter, switchMap} from 'rxjs';

import {ConfirmDialogComponent} from '../../components/confirm-dialog/confirm-dialog.component';
import {Hero, Publisher} from '@data/interface/hero.interface';
import {HeroesService} from "@core/services";

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent implements OnInit {


  public heroForm = new FormGroup({

    id:             new FormControl<string>(''),
    idHero:         new FormControl<string>(''),
    superhero:      new FormControl<string>('', {nonNullable: true}),
    publisher:      new FormControl<Publisher>(Publisher.DCComics),
    alterEgo:       new FormControl<string>(''),
    firstAppearance:new FormControl<string>(''),
    characters:     new FormControl<string>(''),
    altImg:         new FormControl<string>(''),

  })

  public publishers = [
    {
      id: 'DCComics', desc: 'DC- comics'
    },
    {
      id: 'MarvelComics', desc: 'Marvel- comics'
    },

  ]

  constructor(private _heroesService: HeroesService,
              private _router: Router,
              private _activeRouter: ActivatedRoute,
              private _snackbar: MatSnackBar,
              private _dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.getHerosByID();

  }

  getHerosByID(): void{

    if (!this._router.url.includes('/edit')) return;

    this._activeRouter.params
      .pipe(
        switchMap(({id}) => this._heroesService.getHeroesById(id))
      ).subscribe( hero =>{
      if (!hero) {
        return this._router.navigateByUrl('/')
      }
      this.heroForm.reset(hero)
      return ;
    });
  }

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero
    return hero
  }

  onSubmit():void {

    if ( this.heroForm.invalid ) return;

    if ( this.currentHero.id ) {
      this._heroesService.updateHero(this.currentHero.id,  this.currentHero )
        .subscribe( hero => {
          this.showSnackbar(`${ hero.superhero } updated!`);
        })

      return;
    }

    this._heroesService.addHero( this.currentHero )
      .subscribe( hero => {

        this._router.navigate(['/heroes/edit', hero.idHero ]);
        this.showSnackbar(`${ hero.superhero } created!`);
      });
  }

  ondeleteHero() {

    if (!this.heroForm.value) throw Error('id it required')

    const dialogRef = this._dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value
    });

    dialogRef.afterClosed()
      .pipe(

        filter((result: boolean) => result),
        switchMap(() => this._heroesService.deleteHero(this.currentHero.id)),
        filter((wasDeleted: boolean) => wasDeleted),
      ).subscribe(() => {

        this._router.navigate(['/heroes'])
      })
  }


  showSnackbar(message: string) {
    this._snackbar.open(message, 'done', {
      duration: 2500,
    })

  }


}
