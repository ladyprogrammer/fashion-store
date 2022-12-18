import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentComponent } from './payment.component';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a title', () => {
    const title = fixture.nativeElement.querySelector('[data-test="title"]');
    expect(title).toBeTruthy();
    expect(title).toBeInstanceOf(HTMLHeadingElement);
    expect((title as HTMLHeadingElement)?.textContent).toBeTruthy();
  });

  it('should have accepted payments', () => {
    const payments = fixture.nativeElement.querySelector('[data-test="payments"]');
    expect(payments).toBeTruthy();
    expect(payments).toBeInstanceOf(HTMLUListElement);
    expect((payments as HTMLUListElement)?.innerHTML).toBeTruthy();
  });
});
