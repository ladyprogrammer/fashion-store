import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RatingPipe } from '@shared/rating.pipe';
import { Product } from 'src/app/models/product';

import { BrandProductComponent } from './brand-product.component';

describe('BrandProductComponent', () => {
  let component: BrandProductComponent;
  let fixture: ComponentFixture<BrandProductComponent>;
  let mockProduct: Product;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandProductComponent, RatingPipe ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandProductComponent);
    component = fixture.componentInstance;

    mockProduct = {
      id: 999,
      name: 'Blue Dress',
      brand: 'Uniqlo',
      rating: 3.5,
      originalPrice: 120,
      discountedPrice: 89.9,
      imageUrl: '/assets/products/product2.jpg'
    };
    component.product = mockProduct;
    fixture.detectChanges();
  });

  describe('per product UI', () => {
    it('should have product image', () => {
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
