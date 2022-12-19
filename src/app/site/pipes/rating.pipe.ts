import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SvgIcons } from '@shared/svg-icons';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  transform(value: number) {
    const stars = this.convertNumberToStars(value);
    return this.sanitizer.bypassSecurityTrustHtml(stars);
  }

  private convertNumberToStars(value: number): string {
    const fullStars = Math.floor(value);
    let halfStar = this.getHalfStarValue(value, fullStars);

    let stars = '';
    for(let i = 1; i <= 5; i++) {
      stars += this.getStar(fullStars, halfStar, i);
    }
    return stars;
  }

  private getStar(fullStars: number, halfStar: number, index: number): string {
    if (index <= fullStars) {
      return SvgIcons.FULL_STAR;
    } else if (halfStar) {
      return (halfStar === 0.5) ? SvgIcons.HALF_STAR : SvgIcons.FULL_STAR;
    } else {
      return SvgIcons.EMPTY_STAR;
    }
  }

  private getHalfStarValue(rating: number, fullStars: number): number {
    const fraction = rating - fullStars;
    const zeroOrHalf = ( fraction < 0.5 ) ? 0 : 0.5;
    const fullOrZeroHalf = ( fraction > 0.5 ) ? 1 : zeroOrHalf;
    return fullOrZeroHalf;
  }

}
