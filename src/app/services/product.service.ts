import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(
      [
        {
          id: 1,
          name: 'Orange T-Shirt',
          brand: 'Nike',
          originalPrice: 74,
          discountedPrice: 69,
          imageUrl: 'assets/product1.jpg'
        },
        {
          id: 2,
          name: 'Green T-Shirt',
          brand: 'Nike',
          originalPrice: 74,
          discountedPrice: 69,
          imageUrl: 'assets/product2.jpg'
        },
        {
          id: 3,
          name: 'Red T-Shirt',
          brand: 'Nike',
          originalPrice: 74,
          discountedPrice: 69,
          imageUrl: 'assets/product3.jpg'
        },
        {
          id: 4,
          name: 'Blue T-Shirt',
          brand: 'Nike',
          originalPrice: 74,
          discountedPrice: 69,
          imageUrl: 'assets/product4.jpg'
        }
      ]
    );
  }
}
