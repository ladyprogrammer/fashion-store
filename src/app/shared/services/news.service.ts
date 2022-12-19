import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Crud } from '../models/crud';
import { NewsArticle } from '../models/news-article';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService implements Crud {
  private apiUrl = `${env.apiUrl}/news`;

  constructor(
    private http: HttpClient
  ) { }

  create(newsArticle: Partial<NewsArticle>): Observable<NewsArticle> {
    return this.http.post<NewsArticle>(this.apiUrl, newsArticle);
  }

  read() : Observable<NewsArticle[]>;
  read(id: number): Observable<NewsArticle>;
  read(offset: number, limit?: number, search?: string): Observable<NewsArticle[]>;
  read(idOrOffset?: number, limit?: number, search?: string): Observable<NewsArticle | NewsArticle[]> {
    if (idOrOffset === undefined) return this._readMany();
    if (idOrOffset !== 0) return this._readOne(idOrOffset);
    if (search) return this._readMany(idOrOffset, limit, search);
    return this._readMany(idOrOffset, limit);
  }

  update(newsArticle: NewsArticle): Observable<NewsArticle> {
    return this.http.patch<NewsArticle>(`${this.apiUrl}/${newsArticle.id}`, newsArticle);
  }

  delete(id: number): Observable<NewsArticle> {
    return this.http.delete<NewsArticle>(`${this.apiUrl}/${id}`);
  }

  private _readMany(offset = 0, limit = 100, search?: string): Observable<NewsArticle[]> {
    const apiSearchUrl = (search) ? `${this.apiUrl}?title=${search}` : this.apiUrl;

    return this.http.get<NewsArticle[]>(apiSearchUrl)
      .pipe(
        map( newsArticles => newsArticles.slice(offset, limit) )
      )
  }

  private _readOne(id: number): Observable<NewsArticle> {
    return this.http.get<NewsArticle>(`${this.apiUrl}/${id}`);
  }

}
