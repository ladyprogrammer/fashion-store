import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FeaturedProductsComponent } from './featured-products.component';

describe('FeaturedProductsComponent', () => {
  let component: FeaturedProductsComponent;
  let fixture: ComponentFixture<FeaturedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have N products on display by default', () => {
    const NO_OF_DISPLAY_PRODUCTS = 4;
    const products = fixture.debugElement.queryAll(By.css('[data-test="featured-product"]'));
    expect(products.length).toEqual(NO_OF_DISPLAY_PRODUCTS);
  });

  it('should have previous and next buttons to navigate', () => {
    const previousButton = fixture.nativeElement.querySelector('[data-test="previous-button"]');
    const nextButton = fixture.nativeElement.querySelector('[data-test="next-button"]');
    expect(previousButton).toBeTruthy();
    expect(nextButton).toBeTruthy();
  });
});
