import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { PopularBrandsComponent } from "./feature/brand-logos/popular-brands.component";
import { BrandsComponent } from "./feature/brands/brands.component";
import { FeaturedCategoriesComponent } from "./feature/categories/featured-categories.component";
import { HeroComponent } from "./feature/hero/hero.component";
import { HomeComponent } from "./feature/home.component";
import { LatestNewsComponent } from "./feature/latest-news/latest-news.component";
import { FeaturedProductsComponent } from "./feature/products/featured-products.component";
import { SearchResultComponent } from "./feature/search-result/search-result.component";
import { SpecialServicesComponent } from "./feature/special-services/special-services.component";
import { SiteRoutingModule } from "./home-routing.module";
import { BrandProductComponent } from "./ui/featured-category/brand-product/brand-product.component";
import { FeaturedCategoryComponent } from "./ui/featured-category/featured-category.component";
import { RatingPipe } from "./ui/pipes/rating.pipe";
import { ProductsPageNextComponent } from "./ui/products-page-next/products-page-next.component";
import { ProductsPagePreviousComponent } from "./ui/products-page-previous/products-page-previous.component";
import { SpecialServiceComponent } from "./ui/special-service/special-service.component";

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
