import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MidsectionRoutingModule } from './midsection-routing.module';
import { FeaturedCategoriesComponent } from '../../pages/home/featured-categories/featured-categories.component';
import { FeaturedProductsComponent } from '../../pages/home/featured-products/featured-products.component';
import { HeroComponent } from '../../pages/home/hero/hero.component';
import { HomeComponent } from '../../pages/home/home.component';
import { SpecialServicesComponent } from '../../pages/home/special-services/special-services.component';
import { SharedModule } from '@shared/shared.module';
import { ProductsPageNextComponent } from '../../pages/home/featured-products/products-page-next/products-page-next.component';
import { ProductsPagePreviousComponent } from '../../pages/home/featured-products/products-page-previous/products-page-previous.component';
import { LatestNewsComponent } from '../../pages/home/latest-news/latest-news.component';
import { BrandsComponent } from '../../pages/home/brands/brands.component';
import { BrandProductComponent } from '../../pages/home/brands/brand-product/brand-product.component';
import { PopularBrandsComponent } from '../../pages/home/brand-logos/popular-brands.component';
import { FeaturedCategoryComponent } from '../../pages/home/featured-categories/featured-category/featured-category.component';
import { SpecialServiceComponent } from '../../pages/home/special-services/special-service/special-service.component';
import { SearchResultComponent } from '../../pages/search-result/search-result.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    SpecialServicesComponent,
    FeaturedCategoriesComponent,
    FeaturedProductsComponent,
    ProductsPagePreviousComponent,
    ProductsPageNextComponent,
    LatestNewsComponent,
    BrandsComponent,
    BrandProductComponent,
    PopularBrandsComponent,
    FeaturedCategoryComponent,
    SpecialServiceComponent,
    SearchResultComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MidsectionRoutingModule
  ],
  exports: [
    HomeComponent
  ],
})
export class MidsectionModule { }
