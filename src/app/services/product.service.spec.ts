import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { tap } from 'rxjs';
import { Product } from '../models/product';
import { environment as env } from 'src/environments/environment';

import { ProductService } from './product.service';
import * as testData  from './test-data/products';


describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;
  let testRequest: TestRequest;
  let apiUrl: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
    apiUrl = `${env.apiUrl}/products`;
  });

  it('should create a new product', () => {
    service.create(testData.mockNewProduct)
      .subscribe(
        (result) => expect(result).withContext('create()').toEqual(testData.mockNewProduct as Product)
      );

    try {
      testRequest = httpMock.expectOne(apiUrl);
      expect(testRequest.request.method).withContext('method').toBe('POST');
      testRequest.flush(testData.mockNewProduct);
      httpMock.verify();
    } catch (e: any) {
      fail(e);
    }
  });

  it('should read a list of products', () => {
    service.read()
      .subscribe(
        (result) => expect(result).withContext('read()').toEqual(testData.mockSubsetProducts)
      );

    try {
      testRequest = httpMock.expectOne(apiUrl);
      expect(testRequest.request.method).withContext('method').toEqual('GET');
      testRequest.flush(testData.mockProducts);
      httpMock.verify();
    } catch (e: any) {
      fail(e);
    }
  });

  it('should search products', () => {
    const mockSearchText = 'tet';
    const mockOffset = 0;
    const mockLimit = 25
    service.read(mockOffset, mockLimit, mockSearchText)
      .subscribe(
        (result) => expect(result).withContext('read()').toEqual(testData.mockSearchProducts)
      );

    try {
      testRequest = httpMock.expectOne(`${apiUrl}?name=${mockSearchText}`);
      expect(testRequest.request.method).withContext('method').toEqual('GET');
      testRequest.flush(testData.mockSearchProducts);
      httpMock.verify();
    } catch (e: any) {
      fail(e);
    }
  });

  xit('should read a product', () => {
    service.read(testData.mockProduct.id)
      .subscribe(
        (result) => expect(result).withContext('readOne()').toEqual(testData.mockProduct) 
      );

    try {
      testRequest = httpMock.expectOne(`${apiUrl}/${testData.mockProduct.id}`);
      expect(testRequest?.request.method).withContext('method').toEqual('GET');
      testRequest?.flush(testData.mockProduct.id);
      httpMock.verify();
    } catch (e: any) {
      fail(e);
    }
  });

  it('should update a product', () => {
    service.update(testData.mockUpdateProduct)
      .subscribe(
        (result) => expect(result).withContext('update()').toEqual(testData.mockUpdateProduct)
      );

    try {
      testRequest = httpMock.expectOne(`${apiUrl}/${testData.mockUpdateProduct.id}`);
      expect(testRequest?.request.method).withContext('method').toEqual('PATCH');
      testRequest?.flush(testData.mockUpdateProduct);
      httpMock.verify();
    } catch (e: any) {
      fail(e);
    }
  });

  it('should delete a product', () => {
    service.delete(testData.mockDeleteProduct.id)
      .subscribe(
        (result) => expect(result).withContext('delete()').toEqual(testData.mockDeleteProduct)
      );

    try {
      testRequest = httpMock.expectOne(`${apiUrl}/${testData.mockDeleteProduct.id}`);
      expect(testRequest?.request.method).withContext('method').toEqual('DELETE');
      testRequest?.flush(testData.mockDeleteProduct);
      httpMock.verify();
    } catch (e: any) {
      fail(e);
    }
  });

});
