import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Crud } from '../models/crud';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements Crud {
  private apiUrl = `${env.apiUrl}/products`;

  constructor(
    private http: HttpClient
  ) {
  }

  create(product: Partial<Product> & Pick<Product, 'name' | 'brand' | 'originalPrice'>): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  read(): Observable<Product[]>;
  read(id: number): Observable<Product>;
  read(offset?: number, limit?: number, search?: string): Observable<Product[]>;
  read(idOrOffset?: number, limit?: number, search?: string): Observable<Product | Product[]> {
    if (idOrOffset === undefined) return this._readManyNew(); 
    if (idOrOffset !== 0) return this._readOneNew(idOrOffset);
    if (search) return this._readManyNew(idOrOffset, limit, search);
    return this._readManyNew(idOrOffset, limit);
  }
  
  update(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.apiUrl}/${product.id}`, product);
  }

  delete(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${id}`);
  }

  private _readManyNew(offset = 0, limit = 10, search?: string): Observable<Product[]> {
    const readApiUrl = (search) ? `${this.apiUrl}?name=${search}` : this.apiUrl;
    
    return this.http.get<Product[]>(readApiUrl)
      .pipe(
        map( (products: Product[]) => products.slice(offset, limit) ),
      );
  }

  private _readOneNew(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

}
