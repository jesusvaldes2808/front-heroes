import { Component, Input, OnInit,  } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { error } from 'console';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent implements OnInit{

  @Input()
   public heroI!: Hero

  ngOnInit(): void {
      if (!this.heroI)  throw Error(' Heroes no encontrados')
        
       
  }

}
