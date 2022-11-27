import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidsectionComponent } from './midsection.component';

describe('MidsectionComponent', () => {
  let component: MidsectionComponent;
  let fixture: ComponentFixture<MidsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidsectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have hero, special services, featured products sections', () => {
    const hero = fixture.nativeElement.querySelector('[data-test="hero"]');
    const specialServices = fixture.nativeElement.querySelector('[data-test="special-services"]');
    const featuredCategories = fixture.nativeElement.querySelector('[data-test="featured-categories"]');
    const featuredProducts = fixture.nativeElement.querySelector('[data-test="featured-products"]');
    expect(hero).toBeTruthy();
    expect(specialServices).toBeTruthy();
    expect(featuredCategories).toBeTruthy();
    expect(featuredProducts).toBeTruthy();
  });
});
