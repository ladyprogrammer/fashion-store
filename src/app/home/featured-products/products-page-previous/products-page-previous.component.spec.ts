import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPagePreviousComponent } from './products-page-previous.component';

describe('ProductsPagePreviousComponent', () => {
  let component: ProductsPagePreviousComponent;
  let fixture: ComponentFixture<ProductsPagePreviousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsPagePreviousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsPagePreviousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
