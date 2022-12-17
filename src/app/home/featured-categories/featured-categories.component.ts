import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'section-featured-categories',
  templateUrl: './featured-categories.component.html',
  styleUrls: ['./featured-categories.component.scss']
})
export class FeaturedCategoriesComponent implements OnInit {
  categories: Category[];

  constructor() {
    this.categories = [
      {
        title: [ 'Fashion', 'Carousel' ],
        content: "Lorem Ipsum. Proin gravida nibh velit it’s a cold world",
        backgroundImageUrl: '/assets/featured-categories/category1.jpg' 
      },
      {
        title: [ 'Fashion', 'Carousel' ],
        content: "Lorem Ipsum. Proin gravida nibh velit it’s a cold world",
        backgroundImageUrl: '/assets/featured-categories/category2.jpg' 
      }
    ];
  }

  ngOnInit(): void {
  }
}
