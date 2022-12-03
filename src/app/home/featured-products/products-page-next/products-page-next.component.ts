import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'tab-products-page-next',
  templateUrl: './products-page-next.component.html',
  styleUrls: ['./products-page-next.component.scss']
})
export class ProductsPageNextComponent {
  @Input() featuredProducts!: Product[];

}
