import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { FeaturedCategoriesComponent } from './featured-categories.component';
import { FeaturedCategoryComponent } from './featured-category/featured-category.component';

describe('FeaturedCategoriesComponent', () => {
  let component: FeaturedCategoriesComponent;
  let fixture: ComponentFixture<FeaturedCategoriesComponent>;
  const EXPECTED_NO_OF_CATEGORIES = 2;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedCategoriesComponent, FeaturedCategoryComponent  ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have ${EXPECTED_NO_OF_CATEGORIES} categories`, () => {
    const featuredCategories = fixture.debugElement.queryAll(By.css('[data-test="featured-category"]'));
    expect(featuredCategories.length).toEqual(EXPECTED_NO_OF_CATEGORIES);
  });

});
