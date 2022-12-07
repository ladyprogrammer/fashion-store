import { Component } from '@angular/core';

@Component({
  selector: 'block-popular-brands',
  templateUrl: './popular-brands.component.html',
  styleUrls: ['./popular-brands.component.scss']
})
export class PopularBrandsComponent {
  readonly imagePath: string;
  readonly images: readonly string[];   // TODO:  readonly not working

  constructor() {
    this.imagePath = '/assets/popular-brands/';
    this.images = [ 'brand1.png', 'brand2.png', 'brand3.png', 'brand4.png', 'brand5.png', 'brand6.png' ];
  }
}
