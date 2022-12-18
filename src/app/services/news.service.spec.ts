import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NewsArticle } from '../models/news-article';

import { NewsService } from './news.service';
import { mockDeleteNewsArticle, mockNewsArticle, mockNewsArticles, mockUpdatedNewsArticle } from './test-data/news-articles';

describe('NewsService', () => {
  let service: NewsService;
  let httpMock: HttpTestingController;
  let testRequest: TestRequest;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(NewsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be able to add a news article', () => {
    const mockNewsArticle = {
      title: 'The World Out There',
      tagline: 'It\'s great to be out there!',
      content: 'We should all try to leave our comfort zones and push ourselves to the limit.',
    };
    service.create(mockNewsArticle)
      .subscribe(
        newsArticle => expect(newsArticle).withContext('add news article').toEqual(mockNewsArticle as NewsArticle)
      );

    try {
      testRequest = httpMock.expectOne('api/news');
      expect(testRequest.request.method).withContext('method').toBe('POST');
      testRequest.flush(mockNewsArticle);
      httpMock.verify();
    }
    catch (error: unknown) {
      fail(error);
    }
  });

  describe('read', () => {
    it('should get a list of news articles', () => {
      service.read().subscribe(
        articles => expect(articles).toEqual(mockNewsArticles)
      );
      
      try {
        testRequest = httpMock.expectOne('api/news');
        expect(testRequest.request.method).withContext('method').toBe('GET');
        testRequest.flush(mockNewsArticles);
        httpMock.verify();
      } catch (error: unknown) {
        fail(error);
      }
    });

    it('should get search results of news articles', () => {
      const mocksearchText = 'sum';
      const mockOffset = 0;
      const mockLimit = 20;
      service.read(mockOffset, mockLimit, mocksearchText).subscribe(
        articles => expect(articles).toEqual(mockNewsArticles)
      );
      
      try {
        testRequest = httpMock.expectOne(`api/news?title=${mocksearchText}`);
        expect(testRequest.request.method).withContext('method').toBe('GET');
        httpMock.verify();
      } catch (error: unknown) {
        fail(error);
      }
    });

    it('should retrieve one article by Id', () => {
      service.read(mockNewsArticle.id).subscribe(
        article => expect(article).toEqual(mockNewsArticle)
      );

      try {
        testRequest = httpMock.expectOne(`api/news/${mockNewsArticle.id}`);
        expect(testRequest.request.method).toBe('GET');
        testRequest.flush(mockNewsArticle);
        httpMock.verify();
      }
      catch (error: unknown) {
        fail(error)
      }
    });
  });

  it('should update', () => {
    service.update(mockUpdatedNewsArticle).subscribe(
      newsArticle => expect(newsArticle).toEqual(mockUpdatedNewsArticle)
    );

    try {
      testRequest = httpMock.expectOne(`api/news/${mockUpdatedNewsArticle.id}`);
      expect(testRequest.request.method).toBe('PATCH');
      testRequest.flush(mockUpdatedNewsArticle);
      httpMock.verify();
    }
    catch (error: unknown) {
      fail(error)
    }
  });

  it('should delete', () => {
    service.delete(mockDeleteNewsArticle.id).subscribe(
      newsArticle => expect(newsArticle).toEqual(mockDeleteNewsArticle)
    );

    try {
      testRequest = httpMock.expectOne(`api/news/${mockDeleteNewsArticle.id}`);
      expect(testRequest.request.method).toBe('DELETE');
      testRequest.flush(mockDeleteNewsArticle);
      httpMock.verify();
    }
    catch (error: unknown) {
      fail(error)
    }
  });
});
