import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'section-featured-categories',
  templateUrl: './featured-categories.component.html',
  styleUrls: ['./featured-categories.component.scss']
})
export class FeaturedCategoriesComponent {
  categories: { titleLine1: string, titleLine2: string, content: string, backgroundImageUrl: string } []; // TODO: object

  constructor() {
    this.categories = [
      {
        titleLine1: 'Fashion',
        titleLine2: 'Carousel',
        content: "Lorem Ipsum. Proin gravida nibh velit it’s a cold world",
        backgroundImageUrl: '/assets/featured-categories/category1.jpg' 
      },
      {
        titleLine1: 'Fashion',
        titleLine2: 'Carousel',
        content: "Lorem Ipsum. Proin gravida nibh velit it’s a cold world",
        backgroundImageUrl: '/assets/featured-categories/category2.jpg' 
      }
    ];
  }
}
