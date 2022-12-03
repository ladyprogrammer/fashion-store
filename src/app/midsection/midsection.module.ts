import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MidsectionRoutingModule } from './midsection-routing.module';
import { FeaturedCategoriesComponent } from '../home/featured-categories/featured-categories.component';
import { FeaturedProductsComponent } from '../home/featured-products/featured-products.component';
import { HeroComponent } from '../home/hero/hero.component';
import { HomeComponent } from '../home/home.component';
import { SpecialServicesComponent } from '../home/special-services/special-services.component';
import { SharedModule } from '@shared/shared.module';
import { ProductsPageNextComponent } from '../home/featured-products/products-page-next/products-page-next.component';
import { ProductsPagePreviousComponent } from '../home/featured-products/products-page-previous/products-page-previous.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    SpecialServicesComponent,
    FeaturedCategoriesComponent,
    FeaturedProductsComponent,
    ProductsPagePreviousComponent,
    ProductsPageNextComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MidsectionRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class MidsectionModule { }
