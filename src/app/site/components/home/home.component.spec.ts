import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderModule } from '../../../shared/header/header.module';
import { BrandsComponent } from './brands/brands.component';
import { FeaturedCategoriesComponent } from './categories/featured-categories.component';
import { HeroComponent } from './hero/hero.component';

import { HomeComponent } from './home.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { FeaturedProductsComponent } from './products/featured-products.component';
import { ProductsPageNextComponent } from './products/products-page-next/products-page-next.component';
import { ProductsPagePreviousComponent } from './products/products-page-previous/products-page-previous.component';
import { SpecialServicesComponent } from './special-services/special-services.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const unusedComponents = [
    HeroComponent,
    SpecialServicesComponent,
    FeaturedCategoriesComponent,
    FeaturedProductsComponent,
    ProductsPagePreviousComponent,
    ProductsPageNextComponent,
    LatestNewsComponent,
    BrandsComponent,
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent, ...unusedComponents ],
      imports: [ HeaderModule, HttpClientTestingModule, RouterTestingModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('UI', () => {
    it('should have hero', () => {
      const hero = fixture.nativeElement.querySelector('[data-test="hero"]');
      expect(hero).toBeTruthy();
    });
    it('should have special services', () => {
      const specialServices = fixture.nativeElement.querySelector('[data-test="special-services"]');
      expect(specialServices).toBeTruthy();
    });
    it('should have featured categories', () => {
      const featuredCategories = fixture.nativeElement.querySelector('[data-test="featured-categories"]');
      expect(featuredCategories).toBeTruthy();
    });
    it('should have featured products', () => {
      const featuredProducts = fixture.nativeElement.querySelector('[data-test="featured-products"]');
      expect(featuredProducts).toBeTruthy();
    });
    it('should have latest news', () => {
      const latestNews = fixture.nativeElement.querySelector('[data-test="latest-news"]');
      expect(latestNews).toBeTruthy();
    });

    it('should have brands', () => {
      const brands = fixture.nativeElement.querySelector('[data-test="brands"]');
      expect(brands).toBeTruthy();
    });

    it('should have brand logos', () => {
      const brandLogos = fixture.nativeElement.querySelector('[data-test="brand-logos"]');
      expect(brandLogos).toBeTruthy();
    });

  });
});
