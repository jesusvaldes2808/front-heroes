import {Component, OnInit} from '@angular/core';
import {BannerInterface} from "@data/index";
import {BannerService} from "@core/services";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit{

  images!: any[];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  constructor(private _bannerService: BannerService) {
  }
  ngOnInit(): void {

    this._bannerService.getImage().then(images => {
      this.images = images;
    });
  }

}
