import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressComponent } from './address.component';

describe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have title', () => {
    const title = fixture.nativeElement.querySelector('[data-test="title"]');
    expect(title).toBeTruthy();
    expect(title).toBeInstanceOf(HTMLHeadingElement);
    expect((title as HTMLHeadingElement)?.textContent).toBeTruthy();
  });

  it('should have have description', () => {
    const description = fixture.nativeElement.querySelector('[data-test="description"]');
    expect(description).toBeTruthy();
    expect(description?.textContent).toBeTruthy();
  });

  it('should have office address', () => {
    const officeAddress = fixture.nativeElement.querySelector('[data-test="office-address"]');
    expect(officeAddress).toBeTruthy();
    expect(officeAddress?.textContent).toBeTruthy();
  });

  it('should have phone', () => {
    const phone = fixture.nativeElement.querySelector('[data-test="phone"]');
    expect(phone).toBeTruthy();
    expect(phone?.textContent).toBeTruthy();
  });

  it('should have email address', () => {
    const email = fixture.nativeElement.querySelector('[data-test="email"]');
    expect(email).toBeTruthy();
    expect(email?.textContent).toBeTruthy();
  });
});
