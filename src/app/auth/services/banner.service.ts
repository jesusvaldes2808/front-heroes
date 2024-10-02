import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor() { }

  public getData(){
    return[
      {
        itemImageSrc: 'assets/banner/dc1.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
      {
        itemImageSrc: 'assets/banner/marvelDc.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1'
      }
    ]
  }

  public getImage(){
    return Promise.resolve(this.getData());
  }
}
