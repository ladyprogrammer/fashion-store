import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'block-brand-product',
  templateUrl: './brand-product.component.html',
  styleUrls: ['./brand-product.component.scss'],
})
export class BrandProductComponent {
  @Input() product!: Product;

  constructor(
  ) {}
}
