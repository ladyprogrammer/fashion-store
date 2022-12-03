import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPageNextComponent } from './products-page-next.component';

describe('ProductsPageNextComponent', () => {
  let component: ProductsPageNextComponent;
  let fixture: ComponentFixture<ProductsPageNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsPageNextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsPageNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
