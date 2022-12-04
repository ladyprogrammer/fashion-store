import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'section-featured-categories',
  templateUrl: './featured-categories.component.html',
  styleUrls: ['./featured-categories.component.scss']
})
export class FeaturedCategoriesComponent implements AfterViewInit {
  categories;
  black = '#999';
  image = '/assets/featured-categories/category1.jpg';

  constructor() {
    this.categories = [
      {
        titleLine1: 'Fashion',
        titleLine2: 'Carousel',
        content: 'Lorem Ipsum. Proin gravida nibh velit it’s a cold world',
        backgroundImageUrl: '/assets/featured-categories/category1.jpg' 
      },
      {
        titleLine1: 'Fashion',
        titleLine2: 'Carousel',
        content: 'Lorem Ipsum. Proin gravida nibh velit it’s a cold world',
        backgroundImageUrl: '/assets/featured-categories/category2.jpg' 
      }
    ];
  }
  ngAfterViewInit(): void {
    // document.querySelector('.featured-category')?.setAttribute('style', 'background: blue');
  }
}
