import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandLogosComponent } from './brand-logos.component';

describe('BrandLogosComponent', () => {
  let component: BrandLogosComponent;
  let fixture: ComponentFixture<BrandLogosComponent>;
  const NO_OF_BRAND_LOGOS = 6;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandLogosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show six brand logos', () => {
    const logos = fixture.nativeElement.querySelectorAll('[data-test="brand-logo"]');
    expect(logos.length).toEqual(NO_OF_BRAND_LOGOS);
  });
});
