import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FeaturedCategoriesComponent } from './featured-categories.component';

describe('FeaturedCategoriesComponent', () => {
  let component: FeaturedCategoriesComponent;
  let fixture: ComponentFixture<FeaturedCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have two categories', () => {
    const NO_OF_FEATURED_CATEGORIES = 2;
    const featuredCategories = fixture.debugElement.queryAll(By.css('[data-test="featured-category"]'));
    expect(featuredCategories.length).toEqual(NO_OF_FEATURED_CATEGORIES);
  });

  it('should have title, content and button per category', () => {
    const NO_OF_ITEMS = 2;
    const featuredCategories = fixture.debugElement.queryAll(By.css('[data-test="featured-category"]'));
    const titles = fixture.debugElement.queryAll(By.css('[data-test="title"]'));
    const content = fixture.debugElement.queryAll(By.css('[data-test="content"]'));
    const buttons = fixture.debugElement.queryAll(By.css('[data-test="button"]'));
    expect(featuredCategories.length).toEqual(NO_OF_ITEMS);
    expect(titles.length).toEqual(NO_OF_ITEMS);
    expect(content.length).toEqual(NO_OF_ITEMS);
    expect(buttons.length).toEqual(NO_OF_ITEMS);
  });

  it('should use right HTML elements', () => {
    const buttons = fixture.debugElement.queryAll(By.css('[data-test="button"]'));
    buttons.forEach((button) => expect(button.nativeElement).toBeInstanceOf(HTMLButtonElement));
  });
});
