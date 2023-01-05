import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockNewsArticles } from '@shared/mock-data/mock-news-articles';
import { NewsArticle } from '@shared/models/news-article';


@Component({
  selector: 'section-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
  newsArticles!: NewsArticle[];
  newsArticles$!: Observable<NewsArticle[]>;

  constructor(
  ) {
  }

  ngOnInit(): void {
    this.getNewsArticles();
  }
  
  getNewsArticles(): void {
    this.newsArticles$ = of<NewsArticle[]>(mockNewsArticles);
    this.newsArticles$
      .subscribe( (articles) => 
        this.newsArticles = articles
      );
  }
}
