import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have product title', () => {
    const productTitle = fixture.nativeElement.querySelector('[data-test="title"]');
    expect(productTitle).toBeTruthy();
    expect(productTitle).toBeInstanceOf(HTMLHeadingElement);
    expect((productTitle as HTMLHeadingElement)?.textContent).toBeTruthy();
  });

  it('should have menu', () => {
    const menu = fixture.nativeElement.querySelector('[data-test="menu"]');
    expect(menu).toBeTruthy();
    expect(menu).toBeInstanceOf(HTMLUListElement);
    expect((menu as HTMLUListElement)?.innerHTML).toBeTruthy();
  });
});
