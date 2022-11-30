import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MidsectionRoutingModule } from './midsection-routing.module';
import { FeaturedCategoriesComponent } from '../home/featured-categories/featured-categories.component';
import { FeaturedProductsComponent } from '../home/featured-products/featured-products.component';
import { HeroComponent } from '../home/hero/hero.component';
import { HomeComponent } from '../home/home.component';
import { SpecialServicesComponent } from '../home/special-services/special-services.component';


@NgModule({
  declarations: [
    HomeComponent,
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
    HomeComponent
  ]
})
export class MidsectionModule { }
