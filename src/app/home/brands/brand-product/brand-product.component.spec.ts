import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RatingPipe } from '@shared/rating.pipe';

import { BrandProductComponent } from './brand-product.component';

describe('BrandProductComponent', () => {
  let component: BrandProductComponent;
  let fixture: ComponentFixture<BrandProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandProductComponent, RatingPipe ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('per product UI', () => {
    it('should have producthrow images', () => {
      const image = fixture.nativeElement.querySelector('[data-test="image"]');
        expect(image).toBeTruthy();
        expect(image).toBeInstanceOf(HTMLImageElement);
        expect((image as HTMLImageElement)?.src).toBeTruthy();
    });

    it('should have product name', () => {
      const name = fixture.nativeElement.querySelector('[data-test="name"]');
        expect(name).toBeTruthy();
        expect((name as HTMLElement)?.textContent).toBeTruthy();
    });

    it('should have product brand', () => {
      const brand = fixture.nativeElement.querySelector('[data-test="brand"]');
        expect(brand).toBeTruthy();
        expect((brand as HTMLElement)?.textContent).toBeTruthy();
    });

    it('should have rating', () => {
      const rating = fixture.nativeElement.querySelector('[data-test="rating"]');
        expect(rating).toBeTruthy();
        const stars = (rating as HTMLElement)?.childElementCount;
        const NO_OF_EXPECTED_STARS = 5;
        expect(stars).toEqual(NO_OF_EXPECTED_STARS);
    });

    it('should have original price', () => {
      const originalPrice = fixture.nativeElement.querySelector('[data-test="original-price"]');
        expect(originalPrice).toBeTruthy();
        expect((originalPrice as HTMLElement)?.textContent).toBeTruthy();
    });

    it('should have discount price', () => {
      const discountPrice = fixture.nativeElement.querySelector('[data-test="discount-price"]');
        expect(discountPrice).toBeTruthy();
        expect((discountPrice as HTMLElement)?.textContent).toBeTruthy();
    });
  });
});
