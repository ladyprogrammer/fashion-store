import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FeaturedProductsComponent } from './featured-products.component';
import { ProductsPageNextComponent } from '../../../ui/products-page-next/products-page-next.component';
import { ProductsPagePreviousComponent } from './products-page-previous/products-page-previous.component';

describe('FeaturedProductsComponent', () => {
  let component: FeaturedProductsComponent;
  let fixture: ComponentFixture<FeaturedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedProductsComponent, ProductsPagePreviousComponent, ProductsPageNextComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should have N products on display by default', () => {
    const NO_OF_DISPLAY_PRODUCTS = 4;
    const products = fixture.debugElement.queryAll(By.css('[data-test="featured-product"]'));
    expect(products.length).toEqual(NO_OF_DISPLAY_PRODUCTS);
  });

  it('should have previous and next to navigate', () => {
    const previous = fixture.nativeElement.querySelector('[data-test="previous"]');
    const next = fixture.nativeElement.querySelector('[data-test="next"]');
    expect(previous).toBeTruthy();
    expect(next).toBeTruthy();
  });
});
