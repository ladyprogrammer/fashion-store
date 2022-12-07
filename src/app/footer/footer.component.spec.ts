import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountComponent } from './account/account.component';
import { AddressComponent } from './address/address.component';

import { FooterComponent } from './footer.component';
import { ProductComponent } from './product/product.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        FooterComponent,
        AddressComponent,
        AccountComponent,
        ProductComponent,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('footer UI', () => {
    it('should have address section', () => {
      const addressSection = fixture.nativeElement.querySelector('[data-test="address"]');
      expect(addressSection).toBeTruthy();
    });

    it('should have My Account section', () => {
      const accountSection = fixture.nativeElement.querySelector('[data-test="account"]');
      expect(accountSection).toBeTruthy();
    });

    it('should have Product section', () => {
      const productSection = fixture.nativeElement.querySelector('[data-test="product"]');
      expect(productSection).toBeTruthy();
    });

    it('should have Social Networks section', () => {
      const socialSection = fixture.nativeElement.querySelector('[data-test="social"]');
      expect(socialSection).toBeTruthy();
    });

    it('should have Payment section', () => {
      const paymentSection = fixture.nativeElement.querySelector('[data-test="payment"]');
      expect(paymentSection).toBeTruthy();
    });

    it('should have Bottom Menu section', () => {
      const bottomMenu = fixture.nativeElement.querySelector('[data-test="bottom-menu"]');
      expect(bottomMenu).toBeTruthy();
    });

    it('should have copyright section', () => {
      const copyright = fixture.nativeElement.querySelector('[data-test="copyright"]');
      expect(copyright).toBeTruthy();
    });
  });
  
});
