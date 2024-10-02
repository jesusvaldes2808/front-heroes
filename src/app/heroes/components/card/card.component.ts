import { Component, Input, OnInit,  } from '@angular/core';

import { Hero } from '@data/interface/hero.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent implements OnInit{

  @Input()
   public heros!: Hero;

  ngOnInit(): void {

      if (!this.heros)  throw Error(' Heroes no encontrados')
  }

}
