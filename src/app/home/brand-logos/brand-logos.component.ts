import { Component } from '@angular/core';

@Component({
  selector: 'block-brand-logos',
  templateUrl: './brand-logos.component.html',
  styleUrls: ['./brand-logos.component.scss']
})
export class BrandLogosComponent {
  imagePath = '/assets/popular-brands/';
  images = [ 'brand1.png', 'brand2.png', 'brand3.png', 'brand4.png', 'brand5.png', 'brand6.png' ];

}
