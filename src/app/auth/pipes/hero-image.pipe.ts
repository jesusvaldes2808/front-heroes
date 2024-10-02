import { Pipe, PipeTransform } from '@angular/core';

import { Hero } from '@data/interface/hero.interface';

@Pipe({
  name: 'heroImage'
})
export class HeroImagePipe implements PipeTransform {

  transform(hero : Hero): string {

    if (!hero.idHero && !hero.altImg) {
       return  'assets/no-image.png'
      }

     if (hero.altImg)
       return hero.altImg

     return `assets/heroesImg/${hero.idHero}.jpg`


  }

}
