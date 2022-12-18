import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../models/product';
import { mockFeaturedProducts } from './mock-featured-products';
import { mockNewsArticles } from './mock-news-articles';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = mockFeaturedProducts;
    const news = mockNewsArticles;
    return { products, news };
  }

  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 11;
  }
}