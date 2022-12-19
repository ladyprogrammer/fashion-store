import { Component, Input, OnInit } from '@angular/core';
import { Category } from '@shared/models/category';

@Component({
  selector: 'block-featured-category',
  templateUrl: './featured-category.component.html',
  styleUrls: ['./featured-category.component.scss']
})
export class FeaturedCategoryComponent implements OnInit {
  @Input() category!: Category;

  ngOnInit(): void {
  }
  

}
