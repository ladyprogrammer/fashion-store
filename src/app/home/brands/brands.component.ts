import { Component, isDevMode, OnInit } from '@angular/core';
import { map, of, tap } from 'rxjs';
import { mockBrandProducts } from 'src/app/mock-data/mock-brand-products';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'block-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit {
  products!: Product[];

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    of(mockBrandProducts)
      .pipe(
        tap( (products) => {
          if (isDevMode()) { console.log('[BrandsComponent] getProducts()', products) }
        }),
        map( (products) => products.slice(0, 4) )
      )
      .subscribe( (products) => this.products = products );
  }


}
