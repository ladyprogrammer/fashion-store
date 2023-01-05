import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Category } from '@shared/models/category';

import { FeaturedCategoryComponent } from './featured-category.component';

xdescribe('FeaturedCategoryComponent', () => {
  let component: FeaturedCategoryComponent;
  let fixture: ComponentFixture<FeaturedCategoryComponent>;
  let category: Category;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    category =  {
      title: ['Fashion', 'Carousel' ],
      content: `Lorem Ipsum. Proin gravida nibh velit its a cold world`,
      backgroundImageUrl: '/assets/featured-categories/category1.jpg' 
    };
    component.category = category;
    fixture.detectChanges();
  });

  it('should have title', () => {
    const title = fixture.debugElement.query(By.css('[data-test="title"]'));  // TODO: failing test
    expect(title).toBeTruthy();
  });

  it('should have content', () => {
    const content = fixture.debugElement.query(By.css('[data-test="content"]'));
    expect(content).toBeTruthy();
  });

  it('should have button', () => {
    const button = fixture.debugElement.query(By.css('[data-test="button"]'));
    expect(button).toBeTruthy();
  });
});
