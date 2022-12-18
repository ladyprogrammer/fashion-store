import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { Crud } from '../models/crud';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements Crud {
  apiUrl = 'api/products';

  constructor(
    private http: HttpClient
  ) {
  }

  create(product: Partial<Product> & Pick<Product, 'name' | 'brand' | 'originalPrice'>): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  read(start?: number, limit?: number, search?: string): Observable<Product[]>;
  read(id: number): Observable<Product>;
  read(idOrStart?: number, limit?: number, search?: string): Observable<Product> | Observable<Product[]> {
    let result: Observable<Product> | Observable<Product[]>;
    if (typeof idOrStart === 'number') {
      result =  (idOrStart === 0 && limit === undefined) ? this._readOneNew(idOrStart) : this._readManyNew(idOrStart, limit, search);
    } else {
      result = this._readManyNew();
    }
    return result;
  }
  
  update(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.apiUrl}/${product.id}`, product);
  }

  delete(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${id}`);
  }

  getProducts(): Observable<Product[]> {    // TODO: remove if unused
    return this.http.get<Product[]>('api/products');
  }

  private _readManyNew(start: number = 0, limit: number = 10, search?: string): Observable<Product[]> {
    const readApiUrl = (search) ? `${this.apiUrl}?name=${search}` : 'api/products/';
    return this.http.get<Product[]>(readApiUrl)
      .pipe(
        map( (products: Product[]) => products.slice(start, limit) ),
      );
  }

  private _readOneNew(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

}
