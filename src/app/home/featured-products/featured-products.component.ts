import { Component, isDevMode, OnInit, ViewEncapsulation } from '@angular/core';
import { tap } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'section-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FeaturedProductsComponent implements OnInit {
  featuredProducts!: Product[];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.displayProducts()
  }

  displayProducts(): void {
    this.productService.getProducts()
      .pipe(
        tap( (products) => { if ( isDevMode() ) { console.log('[ProductService] displayProducts()', products) } })
      )
      .subscribe(
        (products) => this.featuredProducts = products
      );
  }

}
