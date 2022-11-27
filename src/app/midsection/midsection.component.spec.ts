import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderModule } from '../header/header.module';
import { FeaturedCategoriesComponent } from './featured-categories/featured-categories.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { HeroComponent } from './hero/hero.component';

import { MidsectionComponent } from './midsection.component';
import { SpecialServicesComponent } from './special-services/special-services.component';

describe('MidsectionComponent', () => {
  let component: MidsectionComponent;
  let fixture: ComponentFixture<MidsectionComponent>;
  const unusedComponents = [
    HeroComponent,
    SpecialServicesComponent,
    FeaturedCategoriesComponent,
    FeaturedProductsComponent
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidsectionComponent, ...unusedComponents ],
      imports: [ HeaderModule ]
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
