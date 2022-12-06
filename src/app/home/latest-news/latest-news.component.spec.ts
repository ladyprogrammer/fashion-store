import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestNewsComponent } from './latest-news.component';

fdescribe('LatestNewsComponent', () => {
  let component: LatestNewsComponent;
  let fixture: ComponentFixture<LatestNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('section UI', () => {
    it('should have a title', () => {
      const title = fixture.nativeElement.querySelector('[data-test="section-title"]');
      expect(title).toBeTruthy();
      expect(title?.innerText.trim()).toBeTruthy();
      expect(title).toBeInstanceOf(HTMLHeadingElement);
    });

    it('should have a tagline', () => {
      const title = fixture.nativeElement.querySelector('[data-test="section-tagline"]');
      expect(title).toBeTruthy();
    });

    const NO_OF_ARTICLES = 3;
    it(`should show ${NO_OF_ARTICLES} articles`, () => {
      const articles = fixture.nativeElement.querySelectorAll('[data-test="article"]');
      expect(articles.length).toEqual(NO_OF_ARTICLES);
    });
  });
  
  describe('news article', () => {
    describe('UI', () => {
      it('should have image', () => {
        const image = fixture.nativeElement.querySelector('[data-test="image"]');
        expect(image).toBeTruthy();
        expect(image).toBeInstanceOf(HTMLImageElement);
      });

      it('should have title', () => {
        const title = fixture.nativeElement.querySelector('[data-test="article-title"]');
        expect(title).toBeTruthy();
        expect(title?.innerText.trim()).toBeTruthy();
      });

      it('should have tagline', () => {
        const tagline = fixture.nativeElement.querySelector('[data-test="article-tagline"]');
        expect(tagline).toBeTruthy();
      });

      it('should have excerpt', () => {
        const excerpt = fixture.nativeElement.querySelector('[data-test="excerpt"]');
        expect(excerpt).toBeTruthy();
      });

      it('should have read more', () => {
        const readMoreButton = fixture.nativeElement.querySelector('[data-test="read-more"]');
        expect(readMoreButton).toBeTruthy();
        const isButton = readMoreButton instanceof HTMLButtonElement;
        const isAnchor = readMoreButton instanceof HTMLAnchorElement;
        const result = isButton || isAnchor;
        expect(result).toBeTrue();
      });

      it('should have like', () => {
        const likeButton = fixture.nativeElement.querySelector('[data-test="like"]');
        expect(likeButton).toBeTruthy();
        expect(likeButton).toBeInstanceOf(HTMLButtonElement);
      });

      it('should have comment', () => {
        const commentButton = fixture.nativeElement.querySelector('[data-test="comment"]');
        expect(commentButton).toBeTruthy();
        const isButton = commentButton instanceof HTMLButtonElement;
        const isAnchor = commentButton instanceof HTMLAnchorElement;
        const result = isButton || isAnchor;
        expect(result).toBeTrue();
      });
    });

    xdescribe('buttons', () => {
      it('should go to the article page when "read more" button was clicked', () => {
        
      });

      it('should save the "like" when "like" button was clicked', () => {

      });

      it('should open the article and go to the "comment section" when "comment" button was clicked', () => {
        
      });
    });
  });

});
