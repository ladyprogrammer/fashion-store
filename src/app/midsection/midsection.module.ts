import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MidsectionRoutingModule } from './midsection-routing.module';
import { MidsectionComponent } from './midsection.component';
import { FeaturedCategoriesComponent } from './featured-categories/featured-categories.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { HeroComponent } from './hero/hero.component';
import { SpecialServicesComponent } from './special-services/special-services.component';


@NgModule({
  declarations: [
    MidsectionComponent,
    HeroComponent,
    SpecialServicesComponent,
    FeaturedCategoriesComponent,
    FeaturedProductsComponent
  ],
  imports: [
    CommonModule,
    MidsectionRoutingModule
  ],
  exports: [
    MidsectionComponent
  ]
})
export class MidsectionModule { }
