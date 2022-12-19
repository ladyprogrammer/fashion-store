import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PopularBrandsComponent } from './components/home/brand-logos/popular-brands.component';
import { BrandProductComponent } from './components/home/brands/brand-product/brand-product.component';
import { BrandsComponent } from './components/home/brands/brands.component';
import { FeaturedCategoriesComponent } from './components/home/categories/featured-categories.component';
import { FeaturedCategoryComponent } from './components/home/categories/featured-category/featured-category.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { LatestNewsComponent } from './components/home/latest-news/latest-news.component';
import { FeaturedProductsComponent } from './components/home/products/featured-products.component';
import { ProductsPageNextComponent } from './components/home/products/products-page-next/products-page-next.component';
import { ProductsPagePreviousComponent } from './components/home/products/products-page-previous/products-page-previous.component';
import { SpecialServiceComponent } from './components/home/special-services/special-service/special-service.component';
import { SpecialServicesComponent } from './components/home/special-services/special-services.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SiteRoutingModule } from './site-routing.module';
import { RatingPipe } from './pipes/rating.pipe';

const homeComponents = [
  PopularBrandsComponent,
  BrandsComponent, BrandProductComponent,
  FeaturedCategoriesComponent, FeaturedCategoryComponent,
  HeroComponent,
  LatestNewsComponent,
  FeaturedProductsComponent, ProductsPagePreviousComponent, ProductsPageNextComponent,
  SpecialServicesComponent, SpecialServiceComponent,
  HomeComponent,
];


@NgModule({
  declarations: [
    ...homeComponents,
    SearchResultComponent,
    RatingPipe,
  ],
  imports: [
    SharedModule,
    SiteRoutingModule,
  ],
  exports: [
    HomeComponent,
    SearchResultComponent,
  ],
})
export class SiteModule { }
