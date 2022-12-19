import { AfterViewInit, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from '@shared/models/product';

@Component({
  selector: 'tab-products-page-previous',
  templateUrl: './products-page-previous.component.html',
  styleUrls: ['./products-page-previous.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsPagePreviousComponent {
  @Input() featuredProducts!: Product[];

  constructor() {}


}
