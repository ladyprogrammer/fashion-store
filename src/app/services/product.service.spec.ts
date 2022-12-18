import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { tap } from 'rxjs';
import { Product } from '../models/product';

import { ProductService } from './product.service';
import { mockProduct, mockNewProduct, mockUpdateProduct, mockDeleteProduct } from './test-data/product';
import { mockProducts, mockSubsetProducts, mockSearchProducts } from './test-data/products';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;
  let testRequest: TestRequest | undefined;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create a new product', () => {
    service.create(mockNewProduct)
      .subscribe(
        (result) => expect(result).withContext('create()').toEqual(mockNewProduct as Product)
      );

    try {
      testRequest = httpMock.expectOne('api/products');
      expect(testRequest?.request.method).withContext('method').toBe('POST');
      testRequest?.flush(mockNewProduct);
      httpMock.verify();
    } catch (e: any) {
      fail(e);
    }
  });

  it('should read a list of products', () => {
    service.read()
      .subscribe(
        (result) => expect(result).withContext('read()').toEqual(mockSubsetProducts)
      );

    try {
      testRequest = httpMock.expectOne('api/products/');
      expect(testRequest?.request.method).withContext('method').toEqual('GET');
      testRequest?.flush(mockProducts);
      httpMock.verify();
    } catch (e: any) {
      fail(e);
    }
  });

  it('should search products', () => {
    const searchText = 'tet';
    service.read(0, 25, searchText)
      .subscribe(
        (result) => expect(result).withContext('read()').toEqual(mockSearchProducts)
      );

    try {
      testRequest = httpMock.expectOne(`api/products?name=${searchText}`);
      expect(testRequest?.request.method).withContext('method').toEqual('GET');
      testRequest?.flush(mockSearchProducts);
      httpMock.verify();
    } catch (e: any) {
      fail(e);
    }
  });

  xit('should read a product', () => {
    // const mockId = 10000;
    // service.read(mockId)
    //   .subscribe(
    //     (result) => expect(result).withContext('readOne()').toEqual(mockProduct) // TODO: error TS2345: Argument of type '{ id: number; name: string; brand: string; rating: number; originalPrice: number; }' is not assignable to parameter of type 'Expected<ArrayLike<Product>> | ArrayContaining<Product>'.
    //   );

    // try {
    //   testRequest = httpMock.expectOne(`api/products/${mockId}`);
    //   expect(testRequest?.request.method).withContext('method').toEqual('GET');
    //   testRequest?.flush(mockProduct);
    //   httpMock.verify();
    // } catch (e: any) {
    //   fail(e);
    // }
  });

  it('should update a product', () => {
    service.update(mockUpdateProduct)
      .subscribe(
        (result) => expect(result).withContext('update()').toEqual(mockUpdateProduct)
      );

    try {
      testRequest = httpMock.expectOne(`api/products/${mockUpdateProduct.id}`);
      expect(testRequest?.request.method).withContext('method').toEqual('PATCH');
      testRequest?.flush(mockUpdateProduct);
      httpMock.verify();
    } catch (e: any) {
      fail(e);
    }
  });

  it('should delete a product', () => {
    service.delete(mockDeleteProduct.id)
      .subscribe(
        (result) => expect(result).withContext('delete()').toEqual(mockDeleteProduct)
      );

    try {
      testRequest = httpMock.expectOne(`api/products/${mockDeleteProduct.id}`);
      expect(testRequest?.request.method).withContext('method').toEqual('DELETE');
      testRequest?.flush(mockDeleteProduct);
      httpMock.verify();
    } catch (e: any) {
      fail(e);
    }
  });

});
