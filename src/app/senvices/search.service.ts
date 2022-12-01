import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  getProducts(searchText?: string): Observable<any[]> {
    return of([
      { id: 1, name: 'one'},
      { id: 2, name: 'two'},
    ]);
  }
}
