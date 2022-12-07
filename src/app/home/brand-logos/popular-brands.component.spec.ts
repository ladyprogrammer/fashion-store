import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularBrandsComponent } from './popular-brands.component';

describe('PopularBrandsComponent', () => {
  let component: PopularBrandsComponent;
  let fixture: ComponentFixture<PopularBrandsComponent>;
  const NO_OF_BRAND_LOGOS = 6;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularBrandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show six brand logos', () => {
    const logos = fixture.nativeElement.querySelectorAll('[data-test="brand-logo"]');
    expect(logos.length).toEqual(NO_OF_BRAND_LOGOS);
  });
});
