import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { RatingPipe } from './rating.pipe';

describe('RatingPipe', () => {
  let domSanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
      ]
    });

    domSanitizer = TestBed.inject(DomSanitizer);
  });

  it('create an instance', () => {
    const pipe = new RatingPipe(domSanitizer);
    expect(pipe).toBeTruthy();
  });
});
