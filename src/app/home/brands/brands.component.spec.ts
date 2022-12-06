import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsComponent } from './brands.component';

fdescribe('BrandsComponent', () => {
  let component: BrandsComponent;
  let fixture: ComponentFixture<BrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Brands and Sale UI', () => {

    const NO_OF_COLUMNS_FOR_FEATURED_PRODUCTS = 2;
    it(`should have ${NO_OF_COLUMNS_FOR_FEATURED_PRODUCTS} columns of featured products by brand`, () => {
      const productColumns = fixture.nativeElement.querySelectorAll('[data-test="brand-products"]');
      expect(productColumns.length).toEqual(NO_OF_COLUMNS_FOR_FEATURED_PRODUCTS);
    });

    it('should have a sale column', () => {
      const saleColumn = fixture.nativeElement.querySelector('[data-test="sale"]');
      expect(saleColumn).toBeTruthy();
    });


    describe('products UI', () => {
      it('should have a title', () => {
        const titles = fixture.nativeElement.querySelectorAll('[data-test="title"]');
        expect(titles.length).toEqual(NO_OF_COLUMNS_FOR_FEATURED_PRODUCTS);
        
        titles.forEach((title : unknown) => {
          expect(title).toBeTruthy();
          expect(title).toBeInstanceOf(HTMLHeadingElement);
          expect((title as HTMLHeadingElement)?.textContent).toBeTruthy();
        });
      });

      const NO_OF_PRODUCTS_PER_COLUMN = 4;
      it(`should have ${NO_OF_PRODUCTS_PER_COLUMN} per column`, () => {
        const productColumns = fixture.nativeElement.querySelectorAll('[data-test="brand-products"]');

        productColumns.forEach((productColumn: unknown) => {
          const products = (productColumn as HTMLElement)?.querySelectorAll('[data-test="product"]');
          expect(products.length).toEqual(NO_OF_PRODUCTS_PER_COLUMN);
        });
      });
    });
  });

  describe('Email Subscription', () => {
    it('should have the input for email address', () => {
      const emailInput = fixture.nativeElement.querySelector('[data-test="email-input"]');
      expect(emailInput).toBeTruthy();
      expect(emailInput).toBeInstanceOf(HTMLInputElement);
    });

    it('should have a button to subscribe', () => {
      const buttonInput = fixture.nativeElement.querySelector('[data-test="submit-button"]');
      expect(buttonInput).toBeTruthy();
      expect(buttonInput).toBeInstanceOf(HTMLButtonElement);
      expect((buttonInput as HTMLButtonElement)?.textContent).toBeTruthy();
    });
  });

});
