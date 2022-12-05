import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SvgIcons } from './svg-icons';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {
  starIconFull: SafeHtml;
  starIconHalf: SafeHtml;
  starIconEmpty: SafeHtml;

  constructor(
    private sanitizer: DomSanitizer
  ) {
    this.starIconFull = this.sanitizer.bypassSecurityTrustHtml(SvgIcons.FULL_STAR);
    this.starIconHalf = this.sanitizer.bypassSecurityTrustHtml(SvgIcons.HALF_STAR);
    this.starIconEmpty = this.sanitizer.bypassSecurityTrustHtml(SvgIcons.EMPTY_STAR);
  }

  transform(value: number) {
    const stars = this.numberToStars(value);
    return this.sanitizer.bypassSecurityTrustHtml(stars);
  }

  numberToStars(value: number): string {
    let stars = '';
    const fullStars = Math.floor(value);
    let halfStar = (value - fullStars) > 0.5 ? 1 : ((value - fullStars) < 0.5 ? 0 : 0.5 );
    for(let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars += this.starIconFull;
      } else if (halfStar) {
        stars += (halfStar === 0.5) ? this.starIconHalf : this.starIconFull;
        halfStar = 0;
      } else {
        stars += this.starIconEmpty;
      }
    }
    return stars;
  }

}
