import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MidsectionRoutingModule } from './midsection-routing.module';
import { FeaturedCategoriesComponent } from '../home/featured-categories/featured-categories.component';
import { FeaturedProductsComponent } from '../home/featured-products/featured-products.component';
import { HeroComponent } from '../home/hero/hero.component';
import { HomeComponent } from '../home/home.component';
import { SpecialServicesComponent } from '../home/special-services/special-services.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    SpecialServicesComponent,
    FeaturedCategoriesComponent,
    FeaturedProductsComponent,
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
