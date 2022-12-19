import { Component, isDevMode, OnInit } from '@angular/core';
import { map, of, tap } from 'rxjs';
import { mockBrandProducts } from '@shared/mock-data/mock-brand-products';
import { Product } from '@shared/models/product';

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
        }),
        map( (products) => products.slice(0, 4) )
      )
      .subscribe( (products) => this.products = products );
  }


}
